import Link from 'next/link';
import { ShieldCheck, Award } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Expertise } from '@/components/Expertise';
import { Footer } from '@/components/Footer';

const certifications = [
  {
    id: 'vca',
    icon: ShieldCheck,
    title: 'Certifié VCA*',
    description:
      "Le label VCA* atteste que nos techniciens interviennent selon les normes de sécurité les plus strictes. Certification maintenue en continu depuis 2011.",
  },
  {
    id: 'rgie',
    icon: Award,
    title: 'Agréé RGIE Art.104',
    description:
      "Notre agrément RGIE Art.104 garantit la conformité de toutes nos installations au Règlement Général sur les Installations Électriques belge.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />

      {/* Header de page */}
      <section className="bg-[#090c10] px-6 pt-20 pb-4 text-center md:px-8">
        <div className="mx-auto w-full max-w-3xl space-y-4">
          <h1 className="text-3xl font-extrabold text-[#eef2f8] sm:text-4xl md:text-5xl">
            Nos expertises &amp; services
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#7a8a9a] sm:text-lg">
            Des installations électriques industrielles et tertiaires réalisées
            dans les règles de l&apos;art.
          </p>
        </div>
      </section>

      {/* Cards expertise */}
      <Expertise />

      {/* Certifications */}
      <section className="bg-[#0d1118] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-2xl font-extrabold text-[#eef2f8] sm:text-3xl">
              Nos certifications
            </h2>
            <p className="text-sm text-[#7a8a9a]">
              Des accréditations qui garantissent la qualité et la sécurité de
              chaque intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="flex gap-5 rounded-xl border border-white/6 bg-[#090c10] p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d1a2e]">
                  <Icon className="h-5 w-5 text-[#5a90d0]" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold text-[#eef2f8]">{title}</p>
                  <p className="text-sm leading-relaxed text-[#7a8a9a]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#090c10] py-20 text-center">
        <div className="mx-auto w-full max-w-2xl space-y-6 px-6 md:px-8">
          <h2 className="text-2xl font-extrabold text-[#eef2f8] sm:text-3xl">
            Un projet en tête ?
          </h2>
          <p className="text-base text-[#7a8a9a]">
            Décrivez-nous votre chantier, nous revenons vers vous sous 48h.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1650a0]"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
