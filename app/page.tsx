import type { Metadata } from 'next'
import Image from 'next/image'

import { ContactForm } from '../components/contact-form'
import { SiteHeader } from '../components/site-header'

export const metadata: Metadata = {
  title: 'Trees | Großhändler für Hanfblüten in Österreich',
  description:
    'Trees ist ein österreichischer Großhändler für Hanfblüten. Vier ausgewählte Sorten CBD Blüten, Vertrieb über Trafiken in Österreich.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trees | Großhändler für Hanfblüten in Österreich',
    description:
      'Vier ausgewählte Hanfblüten von Trees. Vertrieb über Trafiken in Österreich.',
    url: '/',
    siteName: 'Trees',
    locale: 'de_AT',
    type: 'website',
  },
}

type Card = {
  id: string
  name: string
  image: string
}

const cards: Card[] = [
  { id: '01', name: 'Gary Payton', image: '/trees_gradient_01_clean_cbd.jpg' },
  { id: '02', name: 'Cali Octane', image: '/trees_gradient_02_clean_cbd.jpg' },
  { id: '03', name: 'Diesel Tonic', image: '/trees_gradient_03_clean_cbd.jpg' },
  { id: '04', name: 'Amnesia', image: '/trees_gradient_04_grain_cbd.jpg' },
]

function CardNumber({ value }: { value: string }) {
  return (
    <div
      className="flex leading-none tracking-[-0.03em]"
      style={{
        color: 'transparent',
        WebkitTextStroke: '1.6px rgba(255,255,255,0.95)',
        textShadow: '0 0 20px rgba(255,255,255,0.08)',
        fontVariantNumeric: 'tabular-nums',
        gap: '0.01em',
      }}
    >
      {value.split('').map((digit, index) => (
        <span key={index} className="inline-flex w-[0.66em] justify-center">
          {digit}
        </span>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="min-h-screen bg-black text-white antialiased">
        <section className="pb-12 pt-28 sm:pt-32">
          <div className="mx-auto w-full max-w-5xl px-5">
            <div className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/Header-Trees_CBD_Hanf-2.jpg"
                  alt="Trees Großhändler für Hanfblüten"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 80rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/60">
              Trees
            </div>

            <h1 className="text-[2.8rem] leading-[0.9] tracking-[-0.04em] sm:text-[4rem] lg:text-[5rem]">
              Großhändler für Hanfblüten in Österreich.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Trees ist ein österreichischer Großhändler für Hanfblüten. Die
              Produkte werden über Trafiken in Österreich vertrieben und stehen
              für ein reduziertes Sortiment sowie langjährige Erfahrung im Umgang
              mit der Hanfpflanze.
            </p>

            <div className="mt-12 max-w-xl">
              <h2 className="text-3xl">Vier Sorten Hanfblüten.</h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Unser Sortiment umfasst vier ausgewählte Hanfblüten und ist über
                Trafiken in Österreich erhältlich.
              </p>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((card) => (
                  <article
                    key={card.id}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 transition-all duration-500 hover:border-white/30"
                  >
                    <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
                    </div>

                    <Image
                      src={card.image}
                      alt={`${card.name} CBD Blüte von Trees`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />

                    <div className="relative z-20 flex h-[220px] flex-col justify-between p-6">
                      <div className="text-3xl">Trees</div>
                      <div className="text-[5.5rem]">
                        <CardNumber value={card.id} />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="tracking-[0.2em]">2G</span>
                        <span>{card.name}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <div className="mx-auto w-full max-w-5xl px-5">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Über uns
            </div>

            <h2 className="mt-4 text-4xl">
              Erfahrung aus über sieben Jahren Hanfbranche.
            </h2>

            <p className="mt-6 max-w-3xl leading-relaxed text-white/65">
              Trees wurde von uns, den Brüdern Nikolas und Sebastian gegründet.
              Wir sind seit mehr als sieben Jahren in der Hanfbranche tätig und
              haben umfangreiche Erfahrung rund um die Hanfpflanze aufgebaut. In
              den vergangenen Jahren lag unser Fokus bei Kosmetikprodukten auf
              Hanfbasis. Mit der neuen rechtlichen Situation in Österreich haben
              wir uns als Großhändler für Hanfblüten weiterentwickelt.
            </p>
          </div>
        </section>

        <section id="kontakt" className="py-20">
          <div className="mx-auto w-full max-w-5xl px-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                Kontakt
              </div>

              <h2 className="mt-4 text-4xl">Anfrage senden</h2>

              <p className="mt-4 text-white/65">
                Bei Interesse oder Fragen zu unserem Sortiment können Sie uns
                jederzeit kontaktieren.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>

        <footer id="impressum" className="border-t border-white/10 bg-black/80">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Impressum
                </div>

                <div className="mt-4 text-3xl tracking-tight">Pure Trees GmbH</div>
              </div>

              <div className="grid gap-6 text-sm leading-7 text-white/68 sm:grid-cols-2">
                <div>
                  Weihburggasse 21/13
                  <br />
                  1010 Wien
                  <br />
                  Österreich
                </div>

                <div>
                  UID-Nummer: ATU74392007
                  <br />
                  Firmenbuchnummer: 510282s
                  <br />
                  Firmenbuchgericht: Handelsgericht Wien
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8 text-sm leading-7 text-white/62">
              Vertreten durch den Geschäftsführer Nikolas König-Simon

              <div className="mt-4 text-white/48">
                Das Rauchen dieses Produktes gefährdet Ihre Gesundheit.
              </div>

              <div className="mt-4">
                <a href="/datenschutz" className="text-white/48 transition hover:text-white">
                  Datenschutzerklärung
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}