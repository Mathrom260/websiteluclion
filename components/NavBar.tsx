'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/expertise' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#090c10]/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-luclion.png"
            alt="Luc Lion SA"
            width={140}
            height={40}
            unoptimized={true}
            style={{ objectFit: 'contain', mixBlendMode: 'screen' }}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:text-white ${isActive ? 'text-[#eef2f8]' : 'text-[#e6e6e6]'}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 block h-0.5 rounded-full bg-[#1a5fb0]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {pathname !== '/contact' && (
            <Button
              variant="secondary"
              className="rounded-lg border-[rgba(255,255,255,0.06)] bg-[#1a5fb0] text-white shadow-[0_8px_30px_rgba(26,95,176,0.35)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#1650a0] hover:shadow-[0_0_20px_rgba(26,95,176,0.4)]"
              size="sm"
              asChild
            >
              <Link href="/contact">Demander un devis</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
