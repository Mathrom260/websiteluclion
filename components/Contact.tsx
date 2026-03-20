'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Navigation, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const contactInfos = [
  { icon: Phone, label: '071/78 80 16' },
  { icon: Mail, label: 'info@luclion.be' },
  { icon: MapPin, label: 'Chau. de Charleroi 81, 5190 Jemeppe-sur-Sambre' },
];

const typeOptions = [
  'Électricité industrielle',
  'Électricité tertiaire',
  'Tableau électrique',
  'Mise aux normes RGIE',
  'Maintenance',
  'Autre',
];

const inputClass =
  'rounded-lg border border-white/10 bg-[#243050] text-[#eef2f8] placeholder:text-[#8a9ab8] transition-colors hover:border-white/20 focus-visible:border-[#2a6fd6] focus-visible:outline-none focus-visible:ring-0';

export function Contact() {
  return (
    <section id="contact" className="bg-[#1a2035] py-20 text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-2"
        >
          {/* Colonne gauche */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="leading-tight">
                <span className="block text-3xl font-black text-[#eef2f8] md:text-4xl">
                  Un chantier à planifier ?
                </span>
                <span className="block text-3xl font-black text-[#7ab0e8] md:text-4xl">
                  Parlons-en.
                </span>
              </h2>
              <p className="mt-3 text-base leading-7 text-[#8a9ab8]">
                Décrivez-nous votre projet.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {contactInfos.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#2a6fd6]/20 bg-[#243050] px-5 py-4"
                >
                  <div className="shrink-0 rounded-lg bg-[#2a6fd6]/15 p-2">
                    <Icon className="h-5 w-5 text-[#7ab0e8]" />
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium text-[#eef2f8]">{label}</span>
                </div>
              ))}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chaussée+de+Charleroi+81,+5190+Jemeppe-sur-Sambre,+Belgique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-[#2a6fd6]/40 bg-[#1e2840] px-5 py-4 transition-colors duration-200 hover:border-[#2a6fd6]/70 hover:bg-[#1e2840]"
              >
                <div className="shrink-0 rounded-lg bg-[#2a6fd6]/15 p-2">
                  <Navigation className="h-5 w-5 text-[#7ab0e8]" />
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-[#7ab0e8]">{"Voir l'itinéraire"}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-[#7ab0e8]" />
              </a>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs text-[#8a9ab8]">
              <ShieldCheck className="h-3 w-3 text-[#7ab0e8]" />
              Réponse rapide · Sans engagement
            </p>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="rounded-2xl border border-[#2a6fd6]/30 bg-[#243050] p-8 shadow-[0_0_40px_rgba(42,111,214,0.08)] lg:mt-46.25">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Nom + Société */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="nom" className="text-sm text-[#8a9ab8]">
                    Nom
                  </Label>
                  <Input id="nom" placeholder="Votre nom" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="societe" className="text-sm text-[#8a9ab8]">
                    Société
                  </Label>
                  <Input id="societe" placeholder="Nom de votre société" className={inputClass} />
                </div>
              </div>

              {/* Email + Téléphone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm text-[#8a9ab8]">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="votre@email.be" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tel" className="text-sm text-[#8a9ab8]">
                    Téléphone
                  </Label>
                  <Input id="tel" type="tel" placeholder="+32 4 00 00 00 00" className={inputClass} />
                </div>
              </div>

              {/* Type de chantier */}
              <div className="space-y-1.5">
                <Label htmlFor="type" className="text-sm text-[#8a9ab8]">
                  Type de chantier
                </Label>
                <select
                  id="type"
                  defaultValue=""
                  className="w-full rounded-lg border border-white/10 bg-[#243050] px-3 py-2 text-sm text-[#eef2f8] outline-none focus:border-[#2a6fd6]"
                >
                  <option value="" disabled className="text-[#8a9ab8]">
                    Sélectionnez un type
                  </option>
                  {typeOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#243050]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm text-[#8a9ab8]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet, le type de site, les contraintes…"
                  className={inputClass}
                />
              </div>

              {/* Bouton */}
              <Button
                type="submit"
                className="w-full rounded-lg bg-[#2a6fd6] py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#2a6fd6]/90 hover:shadow-[0_0_20px_rgba(42,111,214,0.4)]"
              >
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
