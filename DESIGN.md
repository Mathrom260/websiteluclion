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
| `line-soft` | `rgb(255 255 255 / .10)` | filets de colonnes, bordures discrètes |
| `ink-2` | `#0B1C2C` | fond des sections sombres sous le hero |
| `paper-muted` | `#A9B7C7` | texte secondaire sur fond sombre |
| `paper-dim` | `#718398` | eyebrows et texte discret, sur sombre comme sur clair |
| `light` | `#F4F6F8` | fond des sections claires (Réalisations) |
| `light-ink` | `#081522` | texte sur fond clair |

Texte secondaire dans le hero : `paper/90` (paragraphes), `paper/70` (légendes). Dans les
sections : `paper-muted`. Jamais un gris neutre.

## Sections (rythme)

- Padding vertical `py-[4.5rem] md:py-20`. Eyebrow → titre `mt-4` → sous-titre `mt-4` → contenu `mt-12/14`.
- Titre de section : `text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]`.
- Colonnes d'arguments : filet gauche `border-l border-line-soft pl-7`, pas de cards, pas de fond.
- Split 50/50 : photo bord à bord, contenu `lg:pl-20` et marge droite alignée sur le conteneur
  (`lg:pr-[max(2.5rem,calc((100vw-93.125rem)/2+2.5rem))]`).
- Section claire : `bg-light text-light-ink`, vignettes `rounded-md`, aucune ombre, aucune bordure.
- Reveal au scroll (`components/motion/Reveal.tsx`) : opacité 0 → 1, 20px → 0, 650ms, une fois.

## Typographie — Manrope (next/font/google)

| Rôle | Classe | Notes |
|---|---|---|
| H1 hero | `text-[clamp(2.6rem,4.2vw,4.25rem)] leading-[0.97] tracking-[-0.02em] font-light` | 3 lignes forcées ≥ sm, dernière en `accent` |
| Eyebrow | `text-[13px] uppercase tracking-[0.3em] text-accent-deep` | épinglé par la maquette |
| Corps large | `text-xl leading-relaxed text-paper/90` | mesure ≤ 640px |
| Nav / boutons | `text-[17px]` poids 400 (nav) / 500 (CTA) | |
| Feature titre / texte | `text-[17px] font-medium` / `text-[13px] text-paper/70` | |

Graisses chargées : 300, 400, 500, 600. Pas de gras 700+.

## Échelle fluide

`html { font-size: clamp(1rem, 0.8953vw, 1.5rem) }` — 16px jusqu'à 1787px (largeur de la
maquette), puis proportionnel au viewport, plafonné à 24px vers 2680px. Conséquence : **tout
se déclare en rem, jamais en px** (`text-[1.0625rem]` et non `text-[17px]`), pour que grand
écran et maquette gardent les mêmes proportions. Les breakpoints Tailwind ne bougent pas.

## Composants de base

- **Container** : `max-w-[93.125rem] px-6 md:px-10` — 147px de marge à 1787px, échelle au-delà.
- **Header** : absolu sur le hero, transparent, hauteur 88px, `border-b border-line` limitée
  au conteneur. Pill « Demander un devis » : bordure `paper` 1px, fond transparent, hover inversé.
- **Pill primaire** : `h-[58px] rounded-full bg-paper text-ink font-medium px-8` + flèche
  `ArrowRight` qui glisse de 4px au hover.
- **Lien secondaire** : texte `paper` + flèche, hover `accent`.
- **Icônes** : lucide, `strokeWidth={1.5}`, `size-9`, couleur `accent`.

## Photo

`public/images/hero-luc-lion.webp` (1780×883) en `object-cover object-[72%_50%]`.
Voile : `bg-linear-to-r from-ink from-0% via-ink/85 via-40% to-ink/0 to-85%` (tiers gauche
opaque pour le texte, fenêtre lumineuse préservée à droite) + dégradé haut `from-ink/60`
pour la nav.

## Mouvement

Une seule entrée authored : stagger 90ms, translation 18px → 0, 700ms,
`cubic-bezier(0.16,1,0.3,1)` (token `--ease-out-expo`). Pas d'entrée identique répétée sur
chaque section.

## Surfaces navigateur

`::selection` accent/ink · `:focus-visible` outline accent 2px offset 3px ·
`scrollbar-color` line/ink.
