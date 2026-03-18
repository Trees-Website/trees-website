'use client';

import { useState } from 'react';

type FormState = {
  success: boolean;
  message: string;
};

const initialState: FormState = {
  success: false,
  message: '',
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Die Anfrage konnte nicht gesendet werden.');
      }

      form.reset();
      setStatus({
        success: true,
        message: 'Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.',
      });
    } catch (error) {
      setStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Die Anfrage konnte nicht gesendet werden.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-10 grid max-w-xl gap-4" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input
        name="name"
        autoComplete="name"
        placeholder="Name"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
        required
      />

      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
        required
      />

      <input
        name="monopolnummer"
        placeholder="Monopolnummer"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
      />

      <textarea
        name="nachricht"
        placeholder="Nachricht"
        className="min-h-[10rem] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
        required
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Wird gesendet …' : 'Nachricht senden'}
        </button>
      </div>

      {status.message ? (
        <p className={`text-sm ${status.success ? 'text-white/80' : 'text-red-300'}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}