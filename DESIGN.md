# DESIGN.md — Luc Lion SA v2

Monde visuel épinglé par la maquette hero fournie par le client (septembre 2026).
Source unique des tokens : `app/globals.css` (`@theme`). Aucun hex ailleurs.

## Palette

| Token | Valeur | Usage |
|---|---|---|
| `ink` | `#0B1420` | fond de page, texte sur pill blanc |
| `ink-soft` | `#101B2A` | surfaces relevées : cartes, menus déroulants |
| `paper` | `#F4F7FB` | texte principal, pills primaires |
| `accent` | `#A5CCF5` | 3ᵉ ligne du H1, icônes, hover des pills |
| `accent-deep` | `#8FBBEB` | eyebrow, lien actif mobile |
| `line` | `rgb(255 255 255 / .25)` | séparateurs, bordure de nav |

Texte secondaire : `paper/90` (paragraphes), `paper/70` (légendes), jamais un gris neutre.

## Typographie — Manrope (next/font/google)

| Rôle | Classe | Notes |
|---|---|---|
| H1 hero | `text-[clamp(2.6rem,4.2vw,4.25rem)] leading-[0.97] tracking-[-0.02em] font-light` | 3 lignes forcées ≥ sm, dernière en `accent` |
| Eyebrow | `text-[13px] uppercase tracking-[0.3em] text-accent-deep` | épinglé par la maquette |
| Corps large | `text-xl leading-relaxed text-paper/90` | mesure ≤ 640px |
| Nav / boutons | `text-[17px]` poids 400 (nav) / 500 (CTA) | |
| Feature titre / texte | `text-[17px] font-medium` / `text-[13px] text-paper/70` | |

Graisses chargées : 300, 400, 500, 600. Pas de gras 700+.

## Composants de base

- **Container** : `max-w-[1490px] px-6 md:px-10` — 147px de marge à 1787px.
- **Header** : absolu sur le hero, transparent, hauteur 88px, `border-b border-line` limitée
  au conteneur. Pill « Demander un devis » : bordure `paper` 1px, fond transparent, hover inversé.
- **Pill primaire** : `h-[58px] rounded-full bg-paper text-ink font-medium px-8` + flèche
  `ArrowRight` qui glisse de 4px au hover.
- **Lien secondaire** : texte `paper` + flèche, hover `accent`.
- **Icônes** : lucide, `strokeWidth={1.5}`, `size-9`, couleur `accent`.

## Photo

`public/images/hero-luc-lion.webp` (1780×883) en `object-cover object-[72%_50%]`.
Voile : `bg-linear-to-r from-ink/85 via-ink/45 to-ink/5` + dégradé haut `from-ink/60` pour la nav.

## Mouvement

Une seule entrée authored : stagger 90ms, translation 18px → 0, 700ms,
`cubic-bezier(0.16,1,0.3,1)` (token `--ease-out-expo`). Pas d'entrée identique répétée sur
chaque section.

## Surfaces navigateur

`::selection` accent/ink · `:focus-visible` outline accent 2px offset 3px ·
`scrollbar-color` line/ink.
