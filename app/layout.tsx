import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luc Lion SA - Électricité industrielle & tertiaire',
  description:
    "Luc Lion SA offre des solutions d'électricité industrielle et tertiaire en Belgique, avec interlocteur unique et service B2B réactif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-[#1a2035] text-[#eef2f8]">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
