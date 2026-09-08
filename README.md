# Template Dev

Base Next.js prête avec :

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint + Prettier

## Lancer le projet

```bash
npm install
npm run dev
```

## Déploiement

Hébergé sur Vercel, projet **luclion** → https://luclion.vercel.app

Le dépôt GitHub est relié : un push sur `main` déclenche un déploiement de production,
toute autre branche produit une URL de prévisualisation. `.vercelignore` exclut les
maquettes et les PNG sources (seuls les WebP servent au site).

Déploiement manuel si besoin : `vercel --prod`.

Le domaine `luclion.be` n'est pas encore branché — l'ancien site reste en place.

## Formulaire de contact

L'envoi passe par [Resend](https://resend.com) (appel HTTP direct, aucune dépendance).
Variables à définir dans `.env.local` :

```
RESEND_API_KEY=            # clé API Resend
CONTACT_FROM_EMAIL=        # expéditeur sur un domaine vérifié, ex. site@luclion.be
CONTACT_TO_EMAIL=          # destinataire (défaut : info@luclion.be)
```

Sans ces variables, le formulaire ne simule pas d'envoi : il affiche un message invitant
à appeler le 071/78 80 16 ou à écrire à info@luclion.be.
