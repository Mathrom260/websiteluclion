'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Pourquoi', href: '#pourquoi' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#090c10]/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <Link href="#" className="flex items-center">
          <Image
            src="/images/logo-luclion.png"
            alt="Luc Lion SA"
            width={140}
            height={40}
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#e6e6e6] md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="rounded-lg border-[rgba(255,255,255,0.06)] bg-[#1a5fb0] text-white shadow-[0_8px_30px_rgba(26,95,176,0.35)] hover:bg-[#1650a0]"
            size="sm"
            asChild={false}
            onClick={(event) => {
              event.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
