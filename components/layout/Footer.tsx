import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { contact, navigation, services } from '@/lib/content';

const columnTitle = 'text-[0.8125rem] tracking-[0.2em] text-paper-dim uppercase';
const linkClass = 'text-[0.9375rem] text-paper/80 transition-colors hover:text-paper';

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-ink text-paper">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex" aria-label="Luc Lion SA — accueil">
              <Image
                src="/images/logo-luclion-white.png"
                alt="Luc Lion SA"
                width={1087}
                height={388}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[30ch] text-[0.9375rem] leading-relaxed text-paper-muted">
              Électricité industrielle et tertiaire en Belgique. Réalisation, rénovation et
              maintenance, de l&apos;étude à la mise en service.
            </p>
            <p className="mt-4 text-[0.8125rem] tracking-[0.15em] text-paper-dim uppercase">
              Certifié RGIE · VCA*
            </p>
          </div>

          <nav aria-label="Pages" className="lg:col-span-2">
            <p className={columnTitle}>Navigation</p>
            <ul className="mt-5 space-y-3">
              {navigation.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <p className={columnTitle}>Services</p>
            <ul className="mt-5 space-y-3">
              {services.map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={`/expertise#${slug}`} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic lg:col-span-3">
            <p className={columnTitle}>Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-soft pt-6 text-[0.8125rem] text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Luc Lion SA · Tous droits réservés</p>
          <p>Chaussée de Charleroi 81 · 5190 Jemeppe-sur-Sambre · Belgique</p>
        </div>
      </Container>
    </footer>
  );
}
