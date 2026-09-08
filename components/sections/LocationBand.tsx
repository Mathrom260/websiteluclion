import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { contact } from '@/lib/content';

/** Bandeau « nous trouver » sur la vraie photo du bâtiment de Jemeppe-sur-Sambre. */
export function LocationBand() {
  return (
    <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-ink text-paper">
      <Image
        src="/images/cta-batiment-nuit.webp"
        alt="Le bâtiment Luc Lion SA à Jemeppe-sur-Sambre, à la tombée du jour"
        fill
        sizes="100vw"
        className="object-cover object-[60%_45%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-ink from-0% via-ink/55 via-45% to-ink/10 to-100%"
      />
      <Container className="relative pb-12 md:pb-14">
        <Reveal className="max-w-[40rem]">
          <p className="text-[0.8125rem] tracking-[0.3em] text-accent-deep uppercase">Nous trouver</p>
          <p className="mt-3 text-[clamp(1.5rem,2.2vw,2.25rem)] leading-[1.15] font-normal tracking-[-0.02em]">
            {contact.address}
          </p>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 text-[1.0625rem] font-medium text-accent transition-colors hover:text-paper"
          >
            Voir l&apos;itinéraire
            <ArrowUpRight
              className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden
            />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
