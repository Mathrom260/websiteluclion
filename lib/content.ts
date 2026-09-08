import {
  ChartNoAxesColumnIncreasing,
  Clock,
  Users,
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

export const sectors: Sector[] = [
  { label: 'Industrie', href: '/realisations' },
  { label: 'Tertiaire', href: '/realisations' },
  { label: 'Logistique', href: '/realisations' },
];

/** Photo de la section split « Un accompagnement à chaque étape » — à fournir. */
export const processImage: { src: string; alt: string } | undefined = undefined;
