'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isContact = pathname === '/contact';

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#080b0f] text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8">
        <div className={`grid grid-cols-1 gap-10 ${isContact ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {/* Logo + tagline */}
          <div className="space-y-3">
            <Image
              src="/images/logo-luclion.png"
              alt="Luc Lion SA"
              width={100}
              height={32}
              unoptimized={true}
              style={{ objectFit: 'contain' }}
            />
            <p className="text-sm text-[#7a8a9a]">
              Électricité industrielle &amp; tertiaire en Belgique
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9a]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#c8d8f0] transition hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-[#c8d8f0] transition hover:text-white">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#c8d8f0] transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne contact — masquée sur /contact */}
          {!isContact && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9a]">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-[#c8d8f0]">
                <li>+32 (0)4 227 30 30</li>
                <li>info@luclion.be</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.06)] pt-6 text-center text-xs text-[#7a8a9a]">
          © 2025 Luc Lion SA · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
