import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl tracking-tight">Impressum</h1>
        <div className="mt-10 space-y-6 text-white/75">
          <p>
            Pure Trees GmbH
            <br />
            Weihburggasse 21/13
            <br />
            1010 Wien
            <br />
            Österreich
          </p>
          <p>
            UID-Nummer: ATU74392007
            <br />
            Firmenbuchnummer: 510282s
            <br />
            Firmenbuchgericht: Handelsgericht Wien
          </p>
          <p>Vertreten durch den Geschäftsführer Nikolas König-Simon</p>
        </div>
      </div>
    </main>
  );
}
