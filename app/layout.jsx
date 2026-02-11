import './globals.css';

export const metadata = {
  metadataBase: new URL('https://theramayanatimes.vercel.app'),
  title: {
    default: 'THE RAMAYANA TIMES',
    template: '%s | THE RAMAYANA TIMES',
  },
  description:
    'THE RAMAYANA TIMES delivers trusted coverage across India, world affairs, technology, AI, and startups.',
  openGraph: {
    title: 'THE RAMAYANA TIMES',
    description:
      'Read premium journalism from THE RAMAYANA TIMES covering India, world news, tech, and AI.',
    type: 'website',
    url: 'https://theramayanatimes.vercel.app',
    siteName: 'THE RAMAYANA TIMES',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
