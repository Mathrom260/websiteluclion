import {
  Activity,
  BadgeCheck,
  CalendarCheck,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  Clock,
  DraftingCompass,
  FileCheck2,
  FileText,
  Gauge,
  Layers,
  Lightbulb,
  Network,
  PencilRuler,
  Plug,
  Rows3,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Timer,
  Users,
  Waypoints,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/** Contenu partagé entre les pages. Faits vérifiés uniquement (voir PRODUCT.md). */

export const contact = {
  phone: '071/78 80 16',
  phoneHref: 'tel:+3271788016',
  email: 'info@luclion.be',
  address: 'Chaussée de Charleroi 81, 5190 Jemeppe-sur-Sambre',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Chaussée+de+Charleroi+81,+5190+Jemeppe-sur-Sambre,+Belgique',
};

export type ServiceFeature = { icon: LucideIcon; label: string };

export type Service = {
  slug: string;
  label: string;
  /** Description vérifiée, reprise de la v1. */
  description: string;
  /** Trois attributs génériques du service — pas de chiffres, pas de promesses. */
  features: [ServiceFeature, ServiceFeature, ServiceFeature];
  image: { src: string; alt: string };
};

/** Les 6 domaines d'intervention : ancres de la page Services, menu, footer, formulaire. */
export const services: Service[] = [
  {
    slug: 'installations-electriques',
    label: 'Installations électriques',
    description:
      "Conception et réalisation d'installations haute et basse tension sur sites industriels et tertiaires.",
    features: [
      { icon: PencilRuler, label: 'Étude et conseil' },
      { icon: Settings2, label: 'Réalisation sur mesure' },
      { icon: ClipboardCheck, label: 'Mise en service' },
    ],
    image: {
      src: '/images/service-installations.webp',
      alt: "Technicien sur nacelle fixant un chemin de câbles sous la toiture d'un hall industriel",
    },
  },
  {
    slug: 'electricite-tertiaire',
    label: 'Électricité tertiaire',
    description:
      'Bureaux, commerces et bâtiments publics. Installations complètes et conformes aux normes en vigueur.',
    features: [
      { icon: Lightbulb, label: 'Éclairage et distribution' },
      { icon: Network, label: 'Réseaux et connectivité' },
      { icon: Layers, label: 'Solutions sur mesure' },
    ],
    image: {
      src: '/images/service-tertiaire.webp',
      alt: 'Open space moderne avec luminaires LED linéaires et cloisons vitrées',
    },
  },
  {
    slug: 'tableaux-electriques',
    label: 'Tableaux électriques',
    description:
      'Conception, câblage et mise en service de tableaux basse tension sur mesure.',
    features: [
      { icon: DraftingCompass, label: 'Conception sur mesure' },
      { icon: BadgeCheck, label: 'Matériel de qualité' },
      { icon: Gauge, label: 'Tests et mise en service' },
    ],
    image: {
      src: '/images/service-tableaux.webp',
      alt: 'Tableau basse tension ouvert en atelier, câblage ordonné sur rails DIN',
    },
  },
  {
    slug: 'mise-conformite',
    label: 'Mise en conformité RGIE',
    description:
      'Audit et remise aux normes RGIE de vos installations existantes.',
    features: [
      { icon: SearchCheck, label: "Audit de l'existant" },
      { icon: Wrench, label: 'Remise aux normes' },
      { icon: FileCheck2, label: 'Rapport de conformité' },
    ],
    image: {
      src: '/images/service-rgie.webp',
      alt: 'Contrôleur mesurant une installation électrique avec un testeur portable',
    },
  },
  {
    slug: 'cablage-infrastructure',
    label: 'Câblage & infrastructure',
    description:
      'Cheminements de câbles, goulottes et chemins de câbles pour tous types de sites.',
    features: [
      { icon: Waypoints, label: 'Chemins de câbles' },
      { icon: Rows3, label: 'Goulottes et gaines' },
      { icon: Plug, label: 'Raccordements' },
    ],
    image: {
      src: '/images/service-cablage.webp',
      alt: 'Galerie technique avec chemins de câbles en acier fraîchement posés',
    },
  },
  {
    slug: 'maintenance-depannage',
    label: 'Maintenance & dépannage',
    description:
      "Contrats préventifs et interventions curatives rapides sur l'ensemble de vos installations.",
    features: [
      { icon: CalendarCheck, label: 'Contrats préventifs' },
      { icon: Timer, label: 'Dépannage rapide' },
      { icon: Activity, label: 'Suivi de vos installations' },
    ],
    image: {
      src: '/images/service-maintenance.webp',
      alt: "Technicien avec sa caisse à outils se dirigeant vers un site industriel à l'aube",
    },
  },
];

export const projectSectors = ['Industrie', 'Tertiaire', 'Logistique', 'Mise en conformité'] as const;
export type ProjectSector = (typeof projectSectors)[number];

export type Project = {
  id: string;
  sector: ProjectSector;
  /** Nature de la prestation — pas un nom de chantier. */
  title: string;
  /** Prestations réalisées, parmi les 6 services. */
  scope: string[];
  location: string;
  year: string;
  /** `undefined` = placeholder dessiné, en attendant la vraie photo. */
  image?: { src: string; alt: string };
  /** Mis en avant en tête de page (un seul). */
  featured?: boolean;
};

/**
 * TEMPLATE À COMPLÉTER — aucun chantier réel n'est documenté pour l'instant.
 * Chaque entrée décrit un type de prestation, avec lieu et année à renseigner.
 */
export const projects: Project[] = [
  {
    id: 'p1',
    sector: 'Industrie',
    title: 'Installation électrique complète d’un hall de production',
    scope: ['Installations électriques', 'Tableaux électriques', 'Câblage & infrastructure'],
    location: 'Lieu à préciser',
    year: 'Année',
    featured: true,
  },
  {
    id: 'p2',
    sector: 'Tertiaire',
    title: 'Rénovation électrique d’un immeuble de bureaux',
    scope: ['Électricité tertiaire', 'Mise en conformité RGIE'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
  {
    id: 'p3',
    sector: 'Logistique',
    title: 'Infrastructure et éclairage d’un entrepôt',
    scope: ['Câblage & infrastructure', 'Installations électriques'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
  {
    id: 'p4',
    sector: 'Mise en conformité',
    title: 'Audit et remise aux normes RGIE d’un site existant',
    scope: ['Mise en conformité RGIE'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
  {
    id: 'p5',
    sector: 'Industrie',
    title: 'Conception et câblage de tableaux basse tension',
    scope: ['Tableaux électriques'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
  {
    id: 'p6',
    sector: 'Tertiaire',
    title: 'Électricité d’un bâtiment public',
    scope: ['Électricité tertiaire', 'Câblage & infrastructure'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
  {
    id: 'p7',
    sector: 'Logistique',
    title: 'Contrat de maintenance d’une plateforme logistique',
    scope: ['Maintenance & dépannage'],
    location: 'Lieu à préciser',
    year: 'Année',
  },
];

/** Visuel du hero de la page Services (généré, gpt-image-2, sept. 2026). */
export const servicesHeroImage = {
  src: '/images/services-hero.webp',
  alt: 'Deux techniciens consultant des plans devant une ligne de cellules électriques',
};

export const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/expertise' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Carrières', href: '/carrieres' },
  { label: 'Contact', href: '/contact' },
] as const;

export type ApproachItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const approachItems: ApproachItem[] = [
  {
    icon: Zap,
    title: 'Expertise technique',
    description:
      'Des compétences adaptées aux installations industrielles et tertiaires, avec une maîtrise des normes en vigueur.',
  },
  {
    icon: Users,
    title: 'Organisation claire',
    description:
      'Un responsable dédié par chantier, une communication directe et un suivi rigoureux à chaque étape.',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description:
      'Des équipes disponibles rapidement, avec une approche structurée qui limite les imprévus.',
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: 'Vision long terme',
    description:
      "Des installations fiables et durables, conçues pour résister aux exigences de votre activité.",
  },
];

export type ProcessStep = { title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    title: 'Étude et conseil',
    description: 'Analyse de vos besoins et proposition de solutions adaptées.',
  },
  {
    title: 'Réalisation',
    description: 'Des installations de qualité, dans le respect des délais.',
  },
  {
    title: 'Mise en service',
    description: 'Vérification complète et remise d’une installation prête à l’emploi.',
  },
  {
    title: 'Maintenance',
    description: 'Un suivi fiable pour assurer la continuité de votre activité.',
  },
];

export type Sector = {
  label: string;
  href: string;
  /** Photo d'illustration du secteur — `undefined` tant que Mathieu ne l'a pas fournie. */
  image?: { src: string; alt: string };
};

/** Visuels d'illustration générés (gpt-image-2, sept. 2026) — pas des chantiers Luc Lion. */
export const sectors: Sector[] = [
  {
    label: 'Industrie',
    href: '/realisations',
    image: {
      src: '/images/secteur-industrie.webp',
      alt: 'Bâtiment industriel contemporain éclairé à la tombée du jour',
    },
  },
  {
    label: 'Tertiaire',
    href: '/realisations',
    image: {
      src: '/images/secteur-tertiaire.webp',
      alt: 'Immeuble de bureaux à façade vitrée en plein jour',
    },
  },
  {
    label: 'Logistique',
    href: '/realisations',
    image: {
      src: '/images/secteur-logistique.webp',
      alt: "Allée centrale d'un entrepôt logistique avec rayonnages et éclairage LED",
    },
  },
];

/** Photo de la section split « Un accompagnement à chaque étape ». Source 3:1, recadrée
 *  sur le technicien (object-position 26 %) et fondue dans le bleu nuit sur son bord droit. */
export const processImage: { src: string; alt: string } | undefined = {
  src: '/images/accompagnement-technicien.webp',
  alt: 'Technicien Luc Lion intervenant sur un tableau électrique',
};

export type Certification = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Ligne factuelle sous la description (date de certification…). */
  note?: string;
};

/** Textes repris de la maquette « Sécurité et conformité » fournie par Mathieu. */
export const certifications: Certification[] = [
  {
    icon: FileText,
    title: 'RGIE',
    description:
      "Conseil et accompagnement concernant la réglementation applicable aux installations électriques, notamment l'article 104 relatif aux mesures préventives contre l'incendie.",
  },
  {
    icon: ShieldCheck,
    title: 'VCA*',
    description:
      'Une démarche structurée autour de la sécurité, de la qualité et du bien-être sur chantier.',
    note: 'Certifié depuis le 28 novembre 2011.',
  },
];

/** Photo du CTA final : le bâtiment Luc Lion à Jemeppe-sur-Sambre, à la tombée du jour. */
export const ctaImage: { src: string; alt: string } | undefined = {
  src: '/images/cta-batiment-nuit.webp',
  alt: 'Le bâtiment Luc Lion SA à Jemeppe-sur-Sambre, éclairé à la tombée du jour',
};

/** Photo de la section « Sécurité et conformité » (générée, gpt-image-2, sept. 2026). */
export const complianceImage: { src: string; alt: string } | undefined = {
  src: '/images/securite-cables.webp',
  alt: 'Faisceaux de câbles électriques jaunes dans des chemins de câbles en acier',
};

export type Client = {
  name: string;
  /** Logo transparent (SVG ou PNG) — `undefined` = le nom s'affiche en texte. */
  logo?: { src: string; width: number; height: number };
};

/** Ordre de la maquette. Logos à fournir en SVG / PNG transparent. */
export const clients: Client[] = [
  { name: 'BNP Paribas' },
  { name: "Inn'ovin" },
  { name: 'Solvay' },
  { name: 'Tractebel Engie' },
  { name: 'Spie' },
  { name: 'Besix' },
];
