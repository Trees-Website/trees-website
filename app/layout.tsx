import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const unica = localFont({
  src: '../public/Unica77LL-Regular.otf',
  display: 'swap',
  variable: '--font-unica',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trees.eu'),
  title: {
    default: 'Trees | Großhändler für Hanfblüten in Österreich',
    template: '%s | Trees',
  },
  description:
    'Trees ist ein österreichischer Großhändler für Hanfblüten. Unser Sortiment umfasst vier ausgewählte Hanfblüten und ist über Trafiken in Österreich erhältlich.',
  keywords: [
    'Trees',
    'Hanfblüten',
    'Hanfblüten Österreich',
    'Großhändler Hanfblüten',
    'Trafik Hanfblüten',
    'Österreich Hanfblüten',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trees | Großhändler für Hanfblüten in Österreich',
    description:
      'Trees ist ein österreichischer Großhändler für Hanfblüten. Unser Sortiment umfasst vier ausgewählte Hanfblüten und ist über Trafiken in Österreich erhältlich.',
    url: 'https://trees.eu',
    siteName: 'Trees',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/Header-Trees-Hanfbluten.jpg',
        width: 1200,
        height: 1200,
        alt: 'Trees',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trees | Großhändler für Hanfblüten in Österreich',
    description:
      'Trees ist ein österreichischer Großhändler für Hanfblüten. Unser Sortiment umfasst vier ausgewählte Hanfblüten und ist über Trafiken in Österreich erhältlich.',
    images: ['/Header-Trees-Hanfbluten.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" className={unica.variable}>
      <body>{children}</body>
    </html>
  );
}
