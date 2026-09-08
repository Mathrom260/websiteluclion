'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { projects, projectSectors, type Project, type ProjectSector } from '@/lib/content';
import { cn } from '@/lib/utils';

type Filter = 'Tous' | ProjectSector;

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn(
          'object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]',
          className,
        )}
      />
    );
  }
  return <ImagePlaceholder className={className} />;
}

function Meta({ project, light = false }: { project: Project; light?: boolean }) {
  return (
    <dl
      className={cn(
        'grid grid-cols-2 gap-x-8 gap-y-5 text-[0.9375rem]',
        light ? 'text-paper-muted' : 'text-paper/85',
      )}
    >
      <div>
        <dt className="text-[0.75rem] tracking-[0.2em] text-paper-dim uppercase">Secteur</dt>
        <dd className="mt-1.5 text-paper">{project.sector}</dd>
      </div>
      <div>
        <dt className="text-[0.75rem] tracking-[0.2em] text-paper-dim uppercase">Lieu</dt>
        <dd className="mt-1.5 text-paper">{project.location}</dd>
      </div>
      <div>
        <dt className="text-[0.75rem] tracking-[0.2em] text-paper-dim uppercase">Année</dt>
        <dd className="mt-1.5 text-paper">{project.year}</dd>
      </div>
      <div>
        <dt className="text-[0.75rem] tracking-[0.2em] text-paper-dim uppercase">Prestations</dt>
        <dd className="mt-1.5 text-paper">{project.scope.join(' · ')}</dd>
      </div>
    </dl>
  );
}

export function ProjectsShowcase() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);
  const visible = filter === 'Tous' ? rest : rest.filter((p) => p.sector === filter);

  return (
    <>
      {/* Chantier mis en avant — le format « étude de cas » qu'aura chaque référence */}
      <section className="bg-ink pb-20 text-paper md:pb-24">
        <Container>
          <Reveal className="grid overflow-hidden rounded-2xl border border-line-soft lg:grid-cols-12">
            <div className="group relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[32rem]">
              <ProjectImage project={featured} />
              <span className="absolute top-5 left-5 rounded-full border border-line bg-ink/70 px-3.5 py-1.5 text-[0.75rem] tracking-[0.2em] text-paper uppercase backdrop-blur-sm">
                À la une
              </span>
            </div>
            <div className="flex flex-col justify-between gap-10 bg-ink-2 p-7 md:p-10 lg:col-span-5">
              <div>
                <p className="text-[0.8125rem] tracking-[0.3em] text-accent-deep uppercase">
                  {featured.sector}
                </p>
                <h2 className="mt-4 text-[clamp(1.6rem,2.2vw,2.4rem)] leading-[1.12] font-normal tracking-[-0.02em]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-paper-muted">
                  Contexte du site, contraintes rencontrées, solution mise en œuvre et résultat
                  pour le client&nbsp;: quatre à cinq lignes suffisent pour raconter le chantier.
                </p>
              </div>
              <Meta project={featured} light />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filtres + grille */}
      <section className="bg-ink-2 py-20 text-paper md:py-24">
        <Container>
          <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[36rem]">
              <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
                Toutes nos références
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
                Par secteur, par prestation.
              </h2>
            </div>
            <div role="group" aria-label="Filtrer par secteur" className="flex flex-wrap gap-2.5">
              {(['Tous', ...projectSectors] as Filter[]).map((f) => {
                const active = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={cn(
                      'h-11 rounded-full border px-5 text-[0.9375rem] transition-colors duration-200',
                      active
                        ? 'border-paper bg-paper text-ink'
                        : 'border-line text-paper/85 hover:border-paper hover:text-paper',
                    )}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <li key={project.id}>
                <Reveal delay={(i % 3) * 0.06}>
                  <article className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <ProjectImage project={project} />
                      <span className="absolute top-4 left-4 rounded-full border border-line bg-ink/70 px-3 py-1 text-[0.75rem] tracking-[0.15em] text-paper uppercase backdrop-blur-sm">
                        {project.sector}
                      </span>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[1.125rem] leading-snug font-medium text-paper">
                          {project.title}
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-[0.9375rem] text-paper-muted">
                          <MapPin className="size-4 text-accent" strokeWidth={1.75} aria-hidden />
                          {project.location} · {project.year}
                        </p>
                        <p className="mt-1.5 text-[0.875rem] text-paper-dim">{project.scope.join(' · ')}</p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 size-5 shrink-0 text-paper-dim transition-all duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          {visible.length === 0 ? (
            <p className="mt-12 text-[1.0625rem] text-paper-muted">
              Aucune référence documentée dans ce secteur pour le moment.
            </p>
          ) : null}
        </Container>
      </section>
    </>
  );
}
