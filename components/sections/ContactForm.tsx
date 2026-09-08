'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { ArrowRight, CheckCircle2, CircleAlert } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContact, type ContactState } from '@/app/contact/actions';
import { services } from '@/lib/content';
import { cn } from '@/lib/utils';

const fieldClass =
  'h-12 rounded-lg border-line-soft bg-ink px-4 text-base text-paper placeholder:text-paper-dim hover:border-line focus-visible:border-accent focus-visible:ring-accent/30 md:text-base';

const labelClass = 'text-[0.9375rem] font-normal text-paper-muted';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-[3.625rem] w-full items-center justify-center gap-3 rounded-full bg-paper px-8 text-[1.0625rem] font-medium text-ink transition-colors duration-200 hover:bg-accent disabled:cursor-wait disabled:opacity-70 sm:w-auto"
    >
      {pending ? 'Envoi en cours…' : 'Envoyer ma demande'}
      {!pending ? (
        <ArrowRight
          className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          strokeWidth={1.75}
          aria-hidden
        />
      ) : null}
    </button>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-[0.8125rem] text-destructive" role="alert">
      {message}
    </p>
  );
}

const initial: ContactState = { status: 'idle' };

export function ContactForm() {
  const [state, action] = useActionState(submitContact, initial);
  const errors = state.status === 'error' ? state.fields : undefined;

  if (state.status === 'success') {
    return (
      <div className="flex min-h-[28rem] flex-col items-start justify-center rounded-2xl border border-line-soft bg-ink-soft p-8 md:p-10">
        <CheckCircle2 className="size-9 text-accent" strokeWidth={1.5} aria-hidden />
        <h2 className="mt-5 text-[1.5rem] leading-snug font-medium text-paper">
          Demande envoyée.
        </h2>
        <p className="mt-2 max-w-[34ch] text-[1.0625rem] leading-relaxed text-paper-muted">
          Merci. Un responsable vous recontacte rapidement pour étudier votre projet.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      noValidate
      className="rounded-2xl border border-line-soft bg-ink-soft p-6 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelClass}>
            Nom <span aria-hidden className="text-accent">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Votre nom"
            aria-invalid={Boolean(errors?.name)}
            className={fieldClass}
          />
          <FieldError message={errors?.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className={labelClass}>
            Société
          </Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nom de votre société"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelClass}>
            E-mail <span aria-hidden className="text-accent">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="vous@societe.be"
            aria-invalid={Boolean(errors?.email)}
            className={fieldClass}
          />
          <FieldError message={errors?.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelClass}>
            Téléphone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+32 4 00 00 00 00"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="type" className={labelClass}>
            Type de chantier
          </Label>
          <select
            id="type"
            name="type"
            defaultValue=""
            className={cn(
              fieldClass,
              'w-full appearance-none border bg-[url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 stroke=%27%23a9b7c7%27 stroke-width=%271.75%27 viewBox=%270 0 24 24%27><path d=%27m6 9 6 6 6-6%27/></svg>")] bg-[length:1rem] bg-[position:right_1rem_center] bg-no-repeat pr-11 outline-none transition-colors focus-visible:ring-3',
            )}
          >
            <option value="" className="text-paper-dim">
              Sélectionnez un type
            </option>
            {services.map(({ slug, label }) => (
              <option key={slug} value={label} className="bg-ink-soft text-paper">
                {label}
              </option>
            ))}
            <option value="Autre" className="bg-ink-soft text-paper">
              Autre
            </option>
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message" className={labelClass}>
            Votre projet <span aria-hidden className="text-accent">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Type de site, nature des travaux, contraintes, délais souhaités…"
            aria-invalid={Boolean(errors?.message)}
            className={cn(fieldClass, 'h-auto min-h-[8rem] py-3 leading-relaxed')}
          />
          <FieldError message={errors?.message} />
        </div>

        {/* Champ piège anti-robots, invisible pour les humains. */}
        <div className="hidden" aria-hidden>
          <label htmlFor="website">Site web</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {state.status === 'error' && !state.fields ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-lg border border-line-soft bg-ink px-4 py-3 text-[0.9375rem] leading-relaxed text-paper"
        >
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
          {state.message}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="text-[0.8125rem] leading-relaxed text-paper-dim sm:max-w-[26ch] sm:text-right">
          En envoyant ce formulaire, vous acceptez d&apos;être recontacté par Luc Lion SA.
        </p>
      </div>
    </form>
  );
}
