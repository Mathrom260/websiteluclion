import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { clients } from '@/lib/content';

/** Bandeau clients : défilement lent et continu, pause au survol (CSS `.marquee`). */
export function Clients() {
  // Liste dupliquée : la piste fait 200 % et se translate de 50 % en boucle.
  const track = [...clients, ...clients];

  return (
    <section className="bg-light py-10 text-light-ink md:py-12" aria-label="Ils nous font confiance">
      <Container>
        <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
          Ils nous font confiance
        </p>
      </Container>

      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee flex w-max items-center">
          {track.map(({ name, logo }, i) => (
            <li
              key={`${name}-${i}`}
              className="flex h-12 shrink-0 items-center px-12 md:px-16"
              aria-hidden={i >= clients.length}
            >
              {logo ? (
                <Image
                  src={logo.src}
                  alt={name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto opacity-75 grayscale transition-opacity duration-300 hover:opacity-100"
                />
              ) : (
                <span className="text-[1.125rem] font-medium tracking-[0.08em] text-light-ink/45 uppercase">
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
