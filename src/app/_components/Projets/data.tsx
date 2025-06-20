import { ReactNode } from 'react'
import { CiBeerMugFull } from 'react-icons/ci'
import { BiHealth } from 'react-icons/bi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { ProjectUnion } from './Projets'
import AGENCE from '../../../../public/images/agence.png'
import COOP from '../../../../public/images/lacoop.png'
import CSBImgPreview from '../../../../public/images/csbimg.png'
import { StaticImageData } from 'next/image'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiOvh, SiStrapi, SiTypescript } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
export const arsenal = [
  <RiTailwindCssFill
    className="w-full h-full text-[#38BDF8]"
    aria-label="Tailwind CSS"
    title="Tailwind CSS"
    key="Tailwind"
  />,
  <FaHtml5 className="w-full h-full text-[#E34F26]" aria-label="HTML5" title="HTML5" key="HTML5" />,
  <FaCss3Alt className="w-full h-full text-[#1572B6]" aria-label="CSS3" title="CSS3" key="CSS3" />,
  <IoLogoJavascript
    className="w-full h-full text-[#F7DF1E]"
    aria-label="JavaScript"
    title="JavaScript"
    key="JavaScript"
  />,
  <SiTypescript
    className="w-full h-full text-[#3178C6]"
    aria-label="TypeScript"
    title="TypeScript"
    key="TypeScript"
  />,
  <FaSass className="w-full h-full text-[#CC6699]" aria-label="Sass" title="Sass" key="Sass" />,
  <RiNextjsFill className="w-full h-full" aria-label="Next.js" title="Next.js" key="Next" />,
  <FaReact className="w-full h-full text-[#61DAFB]" aria-label="React" title="React" key="React" />,
  <FaVuejs
    className="w-full h-full text-[#42B883]"
    aria-label="Vue.js"
    title="Vue.js"
    key="HTML5"
  />,
  <FaGitAlt className="w-full h-full text-[#F05032]" aria-label="Git" title="Git" key="HTML5" />,
  <FaNodeJs
    className="w-full h-full text-[#339933]"
    aria-label="Node.js"
    title="Node.js"
    key="Node"
  />,
  <TbSql className="w-full h-full text-[#003B57]" aria-label="SQL" title="SQL" key="SQL" />,
  <SiStrapi
    className="w-full h-full text-[#003B57]"
    aria-label="Strapi"
    title="Strapi"
    key="Strapi"
  />,
  <SiOvh className="w-full h-full text-[#003B57]" aria-label="OVH" title="OVH" key="OVH" />
]
export interface ProjectCard {
  title: string
  icon: ReactNode
  mainClass: string
  subClass: string
  union: ProjectUnion
}
export const projetsCardData: ProjectCard[] = [
  {
    title: 'LA COOP',
    icon: <CiBeerMugFull className="w-20 h-20 text-black group-hover:text-[#e9b535]" />,
    mainClass: 'glassomorph_effect_card_coop ',
    subClass: 'group-hover:text-[#e9b535] font-montserrat',
    union: 'coop'
  },
  {
    title: 'CSB Klinik',
    icon: <BiHealth className="w-20 h-20 text-black group-hover:text-white" />,
    mainClass: 'glassomorph_effect_card_csb bg-transparent ',
    subClass: 'group-hover:text-white font-roboto',
    union: 'csb'
  },
  {
    title: 'Agence Graziani',
    icon: <BsCameraReelsFill className="w-20 h-20 text-black group-hover:text-white" />,
    mainClass: 'glassomorph_effect_card_agence bg-transparent  ',
    subClass: 'group-hover:text-white font-robotoCondensed',
    union: 'agence'
  }
]
export interface ProjectDetail {
  title: string
  clientRequest: string
  challenges: string[]
  technologies: ReactNode[]
  collaborators: string
  url: string
  photo: StaticImageData
  notes: string
}

export type DetailProjectType = {
  coop: ProjectDetail[]
  csb: ProjectDetail[]
  agence: ProjectDetail[]
}
export const detailProject: DetailProjectType = {
  coop: [
    {
      title: 'LACOOP',
      clientRequest:
        "Créer un site vitrine pour un bar à leur image, avec leurs couleurs, ainsi qu'un back-office pour gérer les événements.",
      challenges: [
        'Vulgarisation technique',
        'Trouver leur identité visuelle',
        "Architecture d'un back-office complet",
        'Mise en ligne sur OVH'
      ],
      technologies: [arsenal[1], arsenal[0], arsenal[7], arsenal[12], arsenal[9], arsenal[13]],
      collaborators: 'Aucun',
      url: 'https://www.lacoopboissy.fr/',
      photo: COOP,
      notes:
        "Premier projet freelance très formateur. J'ai appris à vulgariser les concepts, suivre une méthodologie orientée composants, mettre en ligne un projet sur OVH et communiquer efficacement avec le client pour répondre à ses besoins."
    }
  ],
  csb: [
    {
      title: 'CSB-Klinik',
      clientRequest:
        "Développer un site d'actualités médicales de type 'Le Monde', avec un abonnement récurrent et une refonte visuelle.",
      challenges: [
        'Création du site from scratch avec un pair',
        'Travail en équipe avec communication via un intermédiaire',
        "Système d'abonnement via Stripe",
        "Mise en place d'une newsletter",
        'Architecture du back-office',
        'Gestion des accès multi-niveaux au back-office',
        "Mise en place d'environnements de pré-production et production",
        'Délais très courts'
      ],
      technologies: [
        arsenal[1],
        arsenal[0],
        arsenal[3],
        arsenal[4],
        arsenal[6],
        arsenal[12],
        arsenal[9],
        arsenal[13]
      ],
      collaborators: '3',
      url: 'https://csb-klinik.lu/',
      photo: CSBImgPreview,
      notes:
        "Projet très formateur : première utilisation de Stripe, travail en équipe, gestion de délais courts, back-office complexe, nombreux changements de dernière minute. J'ai appris à écouter mes pairs, brainstormer efficacement et écrire du code modulable."
    }
  ],
  agence: [
    {
      title: 'Agence Graziani',
      clientRequest:
        'Développer une base de données centralisant un large éventail de profils afin de simplifier et optimiser le processus de casting.',
      challenges: [
        'Gestion des accès multi-niveaux',
        'Formulaires à plusieurs étapes',
        'Filtres complexes (âge, taille, couleur, corpulence, hobbies, statut acteur/figurant/modèle)',
        'Génération de fichiers Excel et PDF',
        'Support de nombreux médias (vidéos, images)',
        'Envoi de packages personnalisés',
        'Système de like/dislike',
        "Architecture d'un back-office complet",
        'Système de mailing',
        'Environnements prod et pré-prod',
        "Mise en place d'une CI",
        'Délais courts',
        'Caching',
        'i18n (internationalisation)'
      ],
      technologies: [
        arsenal[1],
        arsenal[0],
        arsenal[3],
        arsenal[4],
        arsenal[6],
        arsenal[12],
        arsenal[9],
        arsenal[13]
      ],
      collaborators: 'Aucun',
      url: 'https://www.agencegraziani.fr',
      photo: AGENCE,
      notes:
        'Projet exigeant avec beaucoup de pression client. Nombreux ajouts et remaniements fonctionnels. Très enrichissant malgré les contraintes.'
    }
  ]
}
