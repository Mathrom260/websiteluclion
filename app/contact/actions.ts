'use server';

import { contact } from '@/lib/content';

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string; fields?: Partial<Record<FieldName, string>> };

type FieldName = 'name' | 'company' | 'email' | 'phone' | 'type' | 'message';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function read(formData: FormData, key: string) {
  const v = formData.get(key);
  return typeof v === 'string' ? v.trim() : '';
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Champ piège : rempli uniquement par les robots → on fait semblant d'accepter.
  if (read(formData, 'website')) return { status: 'success' };

  const data = {
    name: read(formData, 'name'),
    company: read(formData, 'company'),
    email: read(formData, 'email'),
    phone: read(formData, 'phone'),
    type: read(formData, 'type'),
    message: read(formData, 'message'),
  };

  const fields: Partial<Record<FieldName, string>> = {};
  if (data.name.length < 2) fields.name = 'Indiquez votre nom.';
  if (!EMAIL_RE.test(data.email)) fields.email = 'Indiquez une adresse e-mail valide.';
  if (data.message.length < 10) fields.message = 'Décrivez votre projet en quelques mots.';
  if (Object.keys(fields).length > 0) {
    return { status: 'error', message: 'Quelques champs sont à compléter.', fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? contact.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Tant que l'envoi n'est pas configuré, on le dit plutôt que de simuler un succès.
  if (!apiKey || !from) {
    return {
      status: 'error',
      message: `L'envoi en ligne n'est pas encore actif. Appelez-nous au ${contact.phone} ou écrivez à ${contact.email}.`,
    };
  }

  const lines = [
    `Nom : ${data.name}`,
    data.company && `Société : ${data.company}`,
    `E-mail : ${data.email}`,
    data.phone && `Téléphone : ${data.phone}`,
    data.type && `Type de chantier : ${data.type}`,
    '',
    data.message,
  ].filter(Boolean);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Demande de devis — ${data.company || data.name}`,
      text: lines.join('\n'),
    }),
  });

  if (!res.ok) {
    return {
      status: 'error',
      message: `Votre message n'a pas pu partir. Réessayez, ou appelez-nous au ${contact.phone}.`,
    };
  }

  return { status: 'success' };
}
