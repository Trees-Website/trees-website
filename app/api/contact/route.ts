import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for') || 'unknown';
  const ip = forwardedFor.split(',')[0]?.trim() || 'unknown';
  const limit = rateLimit(ip, 5, 60_000);

  if (!limit.success) {
    return NextResponse.json(
      { message: 'Zu viele Anfragen. Bitte versuchen Sie es in Kürze erneut.' },
      { status: 429 },
    );
  }

  const formData = await request.formData();

  const honeypot = String(formData.get('company_website') || '');
  if (honeypot) {
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  }

  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const monopolnummer = String(formData.get('monopolnummer') || '').trim();
  const nachricht = String(formData.get('nachricht') || '').trim();

  if (!name || !email || !nachricht) {
    return NextResponse.json(
      { message: 'Bitte füllen Sie alle Pflichtfelder aus.' },
      { status: 400 },
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return NextResponse.json(
      { message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { message: 'Kontaktformular ist aktuell noch nicht vollständig konfiguriert.' },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Trees Kontaktformular <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: 'Neue Anfrage über trees.eu',
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Monopolnummer: ${monopolnummer || '-'}`,
        '',
        'Nachricht:',
        nachricht,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Die Nachricht konnte nicht gesendet werden.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Die Nachricht konnte nicht gesendet werden.' },
      { status: 500 },
    );
  }
}