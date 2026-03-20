import Link from 'next/link';
import { ShieldCheck, Award } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Expertise } from '@/components/Expertise';
import { Methode } from '@/components/Methode';
import { Footer } from '@/components/Footer';

const certifications = [
  {
    id: 'vca',
    icon: ShieldCheck,
    title: 'Certifié VCA*',
    description:
      "Le label VCA* atteste que nos techniciens interviennent selon les normes de sécurité les plus strictes. Une exigence maintenue en continu depuis 2011, pour protéger vos équipes et vos installations.",
  },
  {
    id: 'rgie',
    icon: Award,
    title: 'Agréé RGIE Art.104',
    description:
      "Notre agrément RGIE Art.104 garantit que toutes nos installations respectent le Règlement Général des Installations Électriques belge. Une obligation légale que nous traitons comme un standard minimal.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />

      {/* Header de page */}
      <section className="bg-[#090c10] px-6 py-20 text-center md:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="mx-auto max-w-3xl text-4xl font-black text-[#eef2f8] md:text-5xl">
            Expertise électrique pour environnements professionnels exigeants
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#7a8a9a]">
            Des installations réalisées dans les règles de l&apos;art, par des
            techniciens certifiés VCA* et agréés RGIE.
          </p>
        </div>
      </section>

      {/* Cards expertise */}
      <Expertise />

      {/* Méthode */}
      <Methode />

      {/* Certifications */}
      <section className="bg-[#0d1118] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-2xl font-extrabold text-[#eef2f8] sm:text-3xl">
              Certifications &amp; conformité
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#7a8a9a]">
              Nos accréditations ne sont pas que des labels — elles garantissent
              la sécurité et la conformité de chaque intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="rounded-xl border border-[#1a5fb0]/20 bg-[#0d1118] p-8 transition-colors duration-200 hover:border-[#1a5fb0]/40"
              >
                <Icon className="h-6 w-6 text-[#5a90d0]" />
                <p className="mt-4 text-lg font-semibold text-[#eef2f8]">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#7a8a9a]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#090c10] py-24 text-center">
        <div className="mx-auto w-full max-w-2xl px-6 md:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-black text-[#eef2f8] md:text-4xl">
            Vous avez un projet électrique à réaliser ?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-base text-[#7a8a9a]">
            Décrivez-nous votre besoin. Nous analysons votre situation et
            revenons vers vous rapidement avec une proposition claire.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a5fb0]/90"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
