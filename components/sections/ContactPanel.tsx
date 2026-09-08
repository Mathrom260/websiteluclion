import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { contact } from '@/lib/content';

const rows = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: contact.phone,
    href: contact.phoneHref,
    hint: 'Le plus direct pour un dépannage ou une urgence',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: contact.email,
    href: `mailto:${contact.email}`,
    hint: 'Pour un devis, un plan, un dossier technique',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: contact.address,
    href: contact.mapsUrl,
    external: true,
    hint: "Voir l'itinéraire",
  },
];

export function ContactPanel() {
  return (
    <section className="bg-ink pb-24 text-paper md:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ul className="divide-y divide-line-soft border-y border-line-soft">
              {rows.map(({ icon: Icon, label, value, href, hint, external }) => (
                <li key={label} className="py-6">
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-5"
                  >
                    <Icon className="mt-1 size-6 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.8125rem] tracking-[0.2em] text-paper-dim uppercase">
                        {label}
                      </span>
                      <span className="mt-1.5 block text-[1.125rem] leading-snug font-medium text-paper transition-colors group-hover:text-accent md:text-[1.25rem]">
                        {value}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-[0.9375rem] text-paper-muted">
                        {hint}
                        {external ? (
                          <ArrowUpRight
                            className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-2.5 text-[0.9375rem] text-paper-muted">
              <ShieldCheck className="size-4 text-accent" strokeWidth={1.75} aria-hidden />
              Réponse rapide · Sans engagement · Certifié RGIE et VCA*
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
