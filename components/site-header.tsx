import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Trees Startseite">
          <Image
            src="/Trees_logo_white.svg"
            alt="Trees"
            width={132}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">
            Über uns
          </a>
          <a href="#kontakt" className="transition hover:text-white">
            Kontakt
          </a>
          <a href="#impressum" className="transition hover:text-white">
            Impressum
          </a>
        </nav>
      </div>
    </header>
  );
}