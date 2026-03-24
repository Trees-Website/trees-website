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
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition-all duration-300 focus:border-white/40 focus:bg-black/60 focus:ring-1 focus:ring-white/20"
        required
      />

      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition-all duration-300 focus:border-white/40 focus:bg-black/60 focus:ring-1 focus:ring-white/20"
        required
      />

      <input
        name="monopolnummer"
        placeholder="Monopolnummer (optional)"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition-all duration-300 focus:border-white/40 focus:bg-black/60 focus:ring-1 focus:ring-white/20"
      />

      <textarea
        name="nachricht"
        placeholder="Nachricht"
        className="min-h-[10rem] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-base text-white outline-none placeholder:text-white/35 transition-all duration-300 focus:border-white/40 focus:bg-black/60 focus:ring-1 focus:ring-white/20"
        required
      />

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {/* Subtiler Glow */}
          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_70%)]" />
          </span>

          <span className="relative">
            {isSubmitting ? 'Wird gesendet …' : 'Nachricht senden'}
          </span>
        </button>
      </div>

      {status.message ? (
        <p
          className={`text-sm transition-opacity duration-300 ${
            status.success ? 'text-white/70' : 'text-red-300'
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}