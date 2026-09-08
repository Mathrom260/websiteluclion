'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

const services = [
  { label: 'Installations électriques', href: '/expertise#installations-electriques' },
  { label: 'Électricité tertiaire', href: '/expertise#electricite-tertiaire' },
  { label: 'Tableaux électriques', href: '/expertise#tableaux-electriques' },
  { label: 'Mise en conformité RGIE', href: '/expertise#mise-conformite' },
  { label: 'Câblage & infrastructure', href: '/expertise#cablage-infrastructure' },
  { label: 'Maintenance & dépannage', href: '/expertise#maintenance-depannage' },
];

const navItems = [
  { label: 'Services', href: '/expertise', children: services },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Carrières', href: '/carrieres' },
  { label: 'Contact', href: '/contact' },
];

const linkClass =
  'text-[1.0625rem] font-normal text-paper/90 transition-colors duration-200 hover:text-paper aria-[current=page]:text-paper';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Bloque le scroll du document tant que le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-paper">
      <Container>
        <div className="flex h-22 items-center justify-between border-b border-line">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Luc Lion SA — accueil">
            <Image
              src="/images/logo-luclion-white.png"
              alt="Luc Lion SA"
              width={1087}
              height={388}
              priority
              className="h-12 w-auto md:h-15"
            />
          </Link>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-11">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={cn(linkClass, 'inline-flex items-center gap-1.5 py-2')}
                    >
                      {item.label}
                      <ChevronDown
                        className="size-4 transition-transform duration-300 ease-out-expo group-hover:rotate-180 group-focus-within:rotate-180"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </Link>
                    <ul
                      className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-line bg-ink/95 p-2 opacity-0 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.6)] backdrop-blur-md transition-all duration-300 ease-out-expo group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-[0.9375rem] text-paper/85 transition-colors hover:bg-paper/8 hover:text-paper"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={cn(linkClass, 'py-2')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="hidden items-center gap-10 lg:flex">
            {/* Sélecteur de langue décoratif : FR seul pour l'instant. */}
            <span
              className="inline-flex items-center gap-1.5 text-[1.0625rem] text-paper/90"
              aria-label="Langue : français"
            >
              FR
              <ChevronDown className="size-4" strokeWidth={1.75} aria-hidden />
            </span>
            <Link
              href="/contact"
              className="inline-flex h-[3.4375rem] items-center rounded-full border border-paper px-8 text-[1.0625rem] font-normal text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
            >
              Demander un devis
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-line text-paper transition-colors hover:bg-paper/10 lg:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </Container>

      {/* Panneau mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-md lg:hidden"
      >
        <Container className="flex flex-1 flex-col pt-22">
          <nav aria-label="Navigation mobile" className="flex-1 pt-6">
            <ul className="divide-y divide-line">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={close}
                    className="block py-5 text-2xl font-light text-paper aria-[current=page]:text-accent"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="-mt-2 mb-4 space-y-1 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block py-1.5 text-[0.9375rem] text-paper/70 hover:text-paper"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="pb-10">
            <Link
              href="/contact"
              onClick={close}
              className="inline-flex h-[3.4375rem] w-full items-center justify-center rounded-full bg-paper px-8 text-[1.0625rem] font-medium text-ink"
            >
              Demander un devis
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
