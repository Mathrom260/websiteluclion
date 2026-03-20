'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, MapPin, ArrowUpRight } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const projets = [
  {
    titre: 'Installation électrique complète',
    detail: 'Câblage · Tableaux · Mise en conformité',
    lieu: 'Namur',
    categorie: 'Industriel',
  },
  {
    titre: 'Rénovation tableau électrique',
    detail: 'Mise aux normes RGIE · BT',
    lieu: 'Bruxelles',
    categorie: 'Tertiaire',
  },
  {
    titre: 'Infrastructure câblage',
    detail: 'Cheminements · Goulottes · Raccordements',
    lieu: 'Liège',
    categorie: 'Industriel',
  },
  {
    titre: 'Mise en conformité RGIE',
    detail: 'Audit · Remise aux normes · Certification',
    lieu: 'Charleroi',
    categorie: 'Mise en conformité',
  },
  {
    titre: 'Électricité tertiaire bureaux',
    detail: 'Installation complète · Éclairage · Prises',
    lieu: 'Mons',
    categorie: 'Tertiaire',
  },
  {
    titre: 'Maintenance préventive',
    detail: 'Contrat annuel · Vérification · Dépannage',
    lieu: 'Namur',
    categorie: 'Industriel',
  },
];

const filtres = ['Tous', 'Industriel', 'Tertiaire', 'Mise en conformité'];

export default function RealisationsPage() {
  const [filtreActif, setFiltreActif] = useState('Tous');

  const projetsFiltres =
    filtreActif === 'Tous'
      ? projets
      : projets.filter((p) => p.categorie === filtreActif);

  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />

      {/* Header de page */}
      <section
        className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden py-32 text-center"
        style={{
          backgroundImage: "url('/images/fingers.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '50% 30%',
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[rgba(9,12,16,0.82)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h1 className="whitespace-nowrap text-3xl font-black leading-tight text-center text-[#eef2f8] md:text-5xl">
            Nos réalisations sur le terrain
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#c8d4e8] md:text-lg">
            Des installations fiables, conçues pour répondre aux contraintes réelles des environnements professionnels.
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div className="mx-auto max-w-6xl border-b border-white/6" />

      {/* Filtres + Grille */}
      <section className="bg-[#0d1118] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">

          {/* Boutons filtre */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {filtres.map((filtre) => {
              const actif = filtreActif === filtre;
              return (
                <button
                  key={filtre}
                  onClick={() => setFiltreActif(filtre)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                    actif
                      ? 'border-[#1a5fb0] bg-[#1a5fb0] text-white'
                      : 'border-white/20 bg-transparent text-[#7a8a9a] hover:border-white/40 hover:text-[#eef2f8]'
                  }`}
                >
                  {filtre}
                </button>
              );
            })}
          </div>

          {/* Grille projets */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projetsFiltres.map((projet) => (
              <div
                key={`${projet.titre}-${projet.lieu}`}
                className="group overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d1118]"
              >
                {/* Zone image placeholder */}
                <div className="relative h-48 bg-[#0d1a2e] flex items-center justify-center overflow-hidden">
                  <Zap className="h-16 w-16 text-[#1a5fb0]/30 transition-all duration-300 group-hover:text-[#1a5fb0]/20" />
                  <div className="pointer-events-none absolute inset-0 bg-[#1a5fb0]/0 transition-all duration-300 group-hover:bg-[#1a5fb0]/10" />
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-[#5a90d0] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <span className="inline-block rounded-full border border-[#1a5fb0]/20 bg-[#0d1a2e] px-3 py-1 text-xs text-[#5a90d0]">
                    {projet.categorie}
                  </span>
                  <p className="mt-3 text-base font-semibold text-[#eef2f8]">{projet.titre}</p>
                  <p className="mt-1 text-sm text-[#7a8a9a]">{projet.detail}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs text-[#7a8a9a]">
                    <MapPin className="h-3 w-3" />
                    {projet.lieu}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Micro preuve */}
          <div className="mt-16 border-t border-white/[0.06] py-12">
            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-12">
              <span className="text-sm text-[#7a8a9a]">+500 chantiers réalisés</span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="text-sm text-[#7a8a9a]">Belgique</span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="text-sm text-[#7a8a9a]">Industriel &amp; tertiaire</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#090c10] py-24 text-center">
        <div className="mx-auto w-full max-w-2xl px-6 md:px-8">
          <h2 className="text-3xl font-black text-[#eef2f8] md:text-4xl">
            Un projet similaire ?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-base text-[#7a8a9a]">
            Contactez-nous pour discuter de votre besoin.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#1a5fb0]/90 hover:shadow-[0_0_20px_rgba(26,95,176,0.4)]"
          >
            Discuter de votre besoin
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
