import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Luc Lion SA — Électricité industrielle & tertiaire en Belgique',
    template: '%s · Luc Lion SA',
  },
  description:
    'Luc Lion SA accompagne les entreprises dans leurs installations électriques industrielles et tertiaires en Belgique, de la conception à la maintenance. Certifié RGIE.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
