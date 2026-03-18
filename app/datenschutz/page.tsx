import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  alternates: { canonical: '/datenschutz' },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl tracking-tight">Datenschutz</h1>

        <div className="mt-10 space-y-8 text-white/75">
          <section>
            <h2 className="text-2xl text-white">1. Verantwortlicher</h2>
            <p className="mt-3 leading-8">
              Pure Trees GmbH
              <br />
              Weihburggasse 21/13
              <br />
              1010 Wien
              <br />
              Österreich
            </p>
            <p className="mt-3 leading-8">
              E-Mail: mary@trees.eu
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="mt-3 leading-8">
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften. Diese Datenschutzerklärung informiert darüber, welche Daten beim Besuch dieser Website sowie bei der Nutzung des Kontaktformulars verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">3. Hosting</h2>
            <p className="mt-3 leading-8">
              Diese Website wird über Vercel gehostet. Beim Aufruf der Website können technisch erforderliche Verbindungsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Inhalte, Browsertyp und Betriebssystem. Die Verarbeitung erfolgt zur Bereitstellung, Stabilität und Sicherheit der Website.
            </p>
            <p className="mt-3 leading-8">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einem sicheren und technisch funktionsfähigen Betrieb der Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">4. Kontaktformular</h2>
            <p className="mt-3 leading-8">
              Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen eingegebenen Daten, insbesondere Name, E-Mail-Adresse, Monopolnummer und Nachricht, zur Bearbeitung Ihrer Anfrage.
            </p>
            <p className="mt-3 leading-8">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf die Anbahnung oder Durchführung einer geschäftlichen Beziehung gerichtet ist. Im Übrigen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der Bearbeitung eingehender Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">5. E-Mail-Versand über Resend</h2>
            <p className="mt-3 leading-8">
              Für den Versand der über das Kontaktformular übermittelten Nachrichten nutzen wir den Dienst Resend. Dabei werden die für die Anfrage erforderlichen Daten an Resend übermittelt, soweit dies für den Versand und die technische Zustellung der Nachricht notwendig ist.
            </p>
            <p className="mt-3 leading-8">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer zuverlässigen und sicheren Abwicklung eingehender Kontaktanfragen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">6. Sicherheitsmaßnahmen</h2>
            <p className="mt-3 leading-8">
              Zum Schutz vor missbräuchlicher Nutzung des Kontaktformulars setzen wir technische Schutzmaßnahmen ein, insbesondere serverseitige Validierung, ein Honeypot-Feld sowie eine Begrenzung wiederholter Anfragen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">7. Speicherdauer</h2>
            <p className="mt-3 leading-8">
              Wir speichern personenbezogene Daten nur so lange, wie dies zur Bearbeitung der Anfrage, zur Erfüllung gesetzlicher Pflichten oder zur Durchsetzung bzw. Abwehr rechtlicher Ansprüche erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">8. Ihre Rechte</h2>
            <p className="mt-3 leading-8">
              Ihnen stehen nach Maßgabe der gesetzlichen Vorschriften insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch zu. Darüber hinaus besteht das Recht, eine Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde einzubringen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white">9. Aktualität</h2>
            <p className="mt-3 leading-8">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn dies aufgrund technischer oder rechtlicher Änderungen erforderlich wird.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
