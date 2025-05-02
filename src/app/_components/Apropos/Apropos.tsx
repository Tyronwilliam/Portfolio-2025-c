import React from "react";

type Props = {};
export const Apropos = ({}: Props) => {
  return (
    <section className="w-full h-full flex flex-col items-center gap-10 md:gap-0 lg:px-4">
      {/* Intro "Qui suis-je" */}
      <div className="w-full text-center space-y-4 p-4">
        <h1 className="w-fit mx-auto p-2 text-3xl font-bold glassomorph_effect_no_radius">
          Qui suis-je ?
        </h1>
        <p className="glassomorph_effect_no_radius p-2">
          Je m'appelle Tyron-William Chanu, actuellement développeur front-end
          chez Veepee|Ad. Mon truc, c'est créer des interfaces fluides,
          accessibles et performantes.
        </p>
        {/* <blockquote className="w-fit mx-auto italic text-xl font-bold glassomorph_effect_no_radius p-2">
          “Optimiser, factoriser, magnifier : écrire moins pour créer plus.”
        </blockquote> */}
      </div>

      {/* Contenu principal (parcours + compétences) */}
      <section className="w-full flex-1 flex flex-col md:flex-row gap-10 p-4 md:p-0 overflow-hidden">
        {/* Parcours */}
        <div className="md:flex flex-col space-y-4 flex-1 overflow-hidden">
          <h1 className="text-3xl font-bold text-center">Mon parcours</h1>
          <div className="glassomorph_effect_no_radius px-8 py-6 w-full flex-1 flex flex-col  gap-4 xl:items-center xl:justify-center   md:overflow-y-scroll scrollbar-hide scroll-container">
            <p>
              Après plusieurs emplois alimentaires, j'ai découvert le
              développement web un peu par hasard, pendant le Covid, en tentant
              de créer mes propres jeux vidéo. Très vite, j'ai commencé à coder
              de petits sites avec HTML, CSS, JS.
            </p>
            <p>
              Poussé par cette passion naissante, j'ai quitté mon job et mon
              appart pour retourner vivre en famille et me consacrer pleinement
              à l'apprentissage. J'ai intégré la 3W Academy, une formation
              courte mais solide qui m'a donné de bonnes bases.
            </p>
            <p>
              Mon premier job en alternance n'a pas duré — je n'avais pas encore
              le niveau — mais au lieu d'abandonner, j'ai redoublé d'efforts.
            </p>
            <p>
              J'apprends mieux sous pression avec des projets concrets, alors je
              me suis lancé en freelance. Une première mission, puis une autre…
              création de maquettes, relation client, vulgarisation technique,
              création de back-office, développement front-end, déploiement sur
              OVH. J'ai appris en marchant.
            </p>
            <p>
              En quelques mois, j'ai travaillé avec des développeurs confirmés,
              dans des projets variés, jusqu'à décrocher un CDD chez Veepee,
              devenu CDI.
            </p>
          </div>
        </div>

        {/* Compétences et objectifs */}
        <section className="flex flex-col text-sm gap-4 w-full md:w-[30%] shrink-0 overflow-y-auto scrollbar-hide scroll-container">
          {/* Compétences clés */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Compétences clés</h1>
            <ul className="flex flex-wrap gap-2 text-left">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Vue.js",
                "Tailwind CSS",
                "Sass",
              ].map((tech) => (
                <li key={tech} className="glassomorph_effect_no_radius p-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Focus */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Focus</h1>
            <ul className="flex flex-wrap gap-2 text-left">
              {["Performance", "Accessibilité", "Clarté"].map((focus) => (
                <li
                  key={focus}
                  className="glassomorph_effect_no_radius p-1 w-fit"
                >
                  {focus}
                </li>
              ))}
            </ul>
          </div>

          {/* Objectifs */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Mes objectifs</h1>
            <ul className="flex flex-col gap-2 list-disc list-inside text-left glassomorph_effect_no_radius px-4 py-2">
              <li>
                Rejoindre une équipe produit solide et participer au
                développement d'un SaaS à fort impact.
              </li>
              <li>Monter en compétence vers un poste de Lead Developer.</li>
              <li>
                Transmettre : enseigner le code, partager ce que j'ai appris,
                former la relève.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
};
