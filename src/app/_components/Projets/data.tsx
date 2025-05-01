import { ReactNode } from "react";
import { arsenal } from "../Accueil/Accueil";
import { CiBeerMugFull } from "react-icons/ci";
import { BiHealth } from "react-icons/bi";
import { BsCameraReelsFill } from "react-icons/bs";
import { ProjectUnion } from "./Projets";

export interface ProjectCard {
  title: string;
  icon: ReactNode;
  mainClass: string;
  subClass: string;
  union: ProjectUnion;
}
export const projetsCardData: ProjectCard[] = [
  {
    title: "LA COOP",
    icon: (
      <CiBeerMugFull className="w-20 h-20 text-black group-hover:text-[#e9b535]" />
    ),
    mainClass: "glassomorph_effect_card_2",
    subClass: "group-hover:text-[#e9b535] font-montserrat",
    union: "coop",
  },
  {
    title: "CSB Klinik",
    icon: <BiHealth className="w-20 h-20 text-black group-hover:text-white" />,
    mainClass: "glassomorph_effect_card_1 bg-transparent",
    subClass: "group-hover:text-white font-roboto",
    union: "csb",
  },
  {
    title: "Agence Graziani",
    icon: (
      <BsCameraReelsFill className="w-20 h-20 text-black group-hover:text-white" />
    ),
    mainClass: "glassomorph_effect_card_3 bg-transparent font-robotoCondensed",
    subClass: "group-hover:text-white",
    union: "agence",
  },
];
export interface ProjectDetail {
  title: string;
  clientRequest: string;
  challenges: string[];
  technologies: ReactNode[];
  collaborators: string;
  url: string;
  photo: string;
  notes: string;
}

export type DetailProjectType = {
  coop: ProjectDetail[];
  csb: ProjectDetail[];
  agence: ProjectDetail[];
};
export const detailProject: DetailProjectType = {
  coop: [
    {
      title: "LA COOP",
      clientRequest:
        "Créer un site vitrine pour un bar à leur image, avec leurs couleurs, ainsi qu'un back-office pour gérer les événements (fonctionnalité retirée après 1 an).",
      challenges: [
        "Trouver leur identité visuelle",
        "Créer un design qui plaît au client",
        "Mise en ligne sur OVH",
      ],
      technologies: [
        arsenal[1],
        arsenal[0],
        arsenal[7],
        arsenal[12],
        arsenal[9],
        arsenal[13],
      ],
      collaborators: "Aucun",
      url: "https://www.lacoopboissy.fr/",
      photo: "",
      notes:
        "Premier projet freelance très formateur. J'ai appris à vulgariser les concepts, suivre une méthodologie orientée composants, mettre en ligne un projet sur OVH et communiquer efficacement avec le client pour répondre à ses besoins.",
    },
  ],
  csb: [
    {
      title: "CSB-Klinik",
      clientRequest:
        "Développer un site d'actualités médicales de type 'Le Monde', avec un abonnement récurrent et une refonte visuelle.",
      challenges: [
        "Travail en équipe avec communication via un intermédiaire",
        "Création du site from scratch avec un pair",
        "Architecture du back-office",
        "Système d'abonnement via Stripe",
        "Mise en place d'une newsletter",
        "Délais très courts",
        "Gestion des accès multi-niveaux au back-office",
        "Mise en place d'environnements de pré-production et production",
      ],
      technologies: [
        arsenal[1],
        arsenal[0],
        arsenal[3],
        arsenal[4],
        arsenal[6],
        arsenal[12],
        arsenal[9],
        arsenal[13],
      ],
      collaborators: "3",
      url: "https://csb-klinik.lu/",
      photo: "",
      notes:
        "Projet très formateur : première utilisation de Stripe, travail en équipe, gestion de délais courts, back-office complexe, nombreux changements de dernière minute. J'ai appris à écouter mes pairs, brainstormer efficacement et écrire du code modulable.",
    },
  ],
  agence: [
    {
      title: "Agence Graziani",
      clientRequest:
        "Développer une base de données centralisant un large éventail de profils afin de simplifier et optimiser le processus de casting.",
      challenges: [
        "Délais courts",
        "Gestion d'accès sur trois niveaux",
        "Architecture d'un back-office complet",
        "Support de nombreux médias (vidéos, images)",
        "Système de mailing",
        "Gestion des accès multi-niveaux",
        "Environnements prod et pré-prod",
        "Mise en place d'une CI",
        "Génération de fichiers Excel et PDF",
        "Filtres complexes (âge, taille, couleur, corpulence, hobbies, statut acteur/figurant/modèle)",
        "Formulaires à plusieurs étapes",
        "Envoi de packages personnalisés",
        "Système de like/dislike",
        "Caching",
        "i18n (internationalisation)",
      ],
      technologies: [
        arsenal[1],
        arsenal[0],
        arsenal[3],
        arsenal[4],
        arsenal[6],
        arsenal[12],
        arsenal[9],
        arsenal[13],
      ],
      collaborators: "Aucun",
      url: "https://www.agencegraziani.fr",
      photo: "",
      notes:
        "Projet exigeant avec beaucoup de pression client. Nombreux ajouts et remaniements fonctionnels. Très enrichissant malgré les contraintes.",
    },
  ],
};

// Title
// Concept
//Défi
// Stack

// left
// AVis Client
// Collaborateur
// Photo
// URL
//more
