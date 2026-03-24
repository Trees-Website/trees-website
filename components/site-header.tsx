'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 pt-6 sm:px-6 lg:px-5">
        <div className="flex items-start justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Trees Startseite">
            <Image
            src="/Trees_logo_white.png"
            alt="Trees"
            width={126}
            height={36}
            priority
            className="h-8 w-auto sm:h-9"
            />
          </a>

          <nav className="hidden gap-8 pt-2 text-sm text-white/70 md:flex">
            <a
              href="#about"
              className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Über uns
            </a>
            <a
              href="#kontakt"
              className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Kontakt
            </a>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>

            {mobileMenuOpen && (
              <div className="mt-3 w-48 rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur-xl">
                <nav className="flex flex-col text-sm text-white/80">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
                  >
                    Über uns
                  </a>
                  <a
                    href="#kontakt"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
                  >
                    Kontakt
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}