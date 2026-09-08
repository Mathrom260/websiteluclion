import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';

/** La vraie photo du siège, en cadre contenu (source 1227px : pas de plein écran). */
export function AboutStory() {
  return (
    <section className="bg-ink pb-20 text-paper md:pb-24">
      <Container>
        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-line-soft">
            <div className="relative aspect-[2.75/1]">
              <Image
                src="/images/batiment-jour.webp"
                alt="Le hall industriel et les bureaux de Luc Lion SA à Jemeppe-sur-Sambre"
                fill
                sizes="(min-width: 1490px) 1490px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col gap-2 border-t border-line-soft bg-ink-2 px-6 py-5 text-[0.9375rem] text-paper-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
              <span>Chaussée de Charleroi 81, Jemeppe-sur-Sambre</span>
              <span className="text-paper-dim">Hall industriel et bureaux construits en 1986</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
