import React from "react";

type Props = {};
export const Apropos = ({}: Props) => {

  return (
    <section className="w-full md:h-[759px] flex flex-col items-center gap-10 md:gap-0 lg:p-4 lg:pt-0 grow ">
      <div className="text-center space-y-4  p-4">
        <h1 className="w-fit mx-auto p-2 text-3xl  font-bold glassomorph_effect_no_radius">
          Qui suis-je ?
        </h1>
        <p className="glassomorph_effect_no_radius p-2">
          Je m'appelle Tyron-William Chanu, actuellement développeur front-end
          chez Veepee|Ad. Mon truc, c'est créer des interfaces fluides,
          accessibles et performantes.
        </p>
        <blockquote className="w-fit mx-auto italic text-xl font-bold glassomorph_effect_no_radius p-2">
          “Optimiser, factoriser, magnifier : écrire moins pour créer plus.”
        </blockquote>
      </div>

      <section className="w-full flex flex-col md:flex-row gap-10 grow p-4 pt-2">
        {/* Parcours */}
        <div className="space-y-4 glassomorph_effect_no_radius px-8 pb-6 pt-4 h-fit">
          <h1 className="text-3xl font-bold text-center ">Mon parcours</h1>
          <div className="space-y-2">
            <p>
              Après plusieurs emplois alimentaires, j'ai découvert le
              développement web un peu par hasard, pendant le Covid, en tentant
              de créer mes propres jeux vidéo. Très vite, j'ai commencé à coder
              de petits sites avec HTML, CSS, JS.
            </p>
          </div>
          <p>
            Poussé par cette passion naissante, j'ai quitté mon job et mon
            appart pour retourner vivre en famille et me consacrer pleinement à
            l'apprentissage. J'ai intégré la 3W Academy, une formation courte
            mais solide qui m'a donné de bonnes bases.
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
        </div>{" "}
        {/* BOOTOM */}
        <section className="flex flex-col text-sm gap-2">
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Compétences clés</h1>
            <ul className="flex flex-wrap gap-2 text-left">
              <li className="glassomorph_effect_no_radius p-1">React</li>
              <li className="glassomorph_effect_no_radius p-1">TypeScript</li>
              <li className="glassomorph_effect_no_radius p-1">Next.js</li>
              <li className="glassomorph_effect_no_radius p-1">Vue.js</li>
              <li className="glassomorph_effect_no_radius p-1">Tailwind CSS</li>
              <li className="glassomorph_effect_no_radius p-1">Sass</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Focus</h1>
            <ul className="flex flex-wrap gap-2 text-left">
              <li className="glassomorph_effect_no_radius p-1 w-fit">
                Performance
              </li>
              <li className="glassomorph_effect_no_radius p-1 w-fit">
                Accessibilité
              </li>
              <li className="glassomorph_effect_no_radius p-1 w-fit">Clarté</li>
            </ul>
          </div>
          {/* DIV 2 */}
          <div className="space-y-2 glassomorph_effect_no_radius px-4 py-2">
            <h1 className="text-lg text-center font-bold">Mes objectifs</h1>
            <ul className="flex flex-col gap-2 list-disc list-inside text-left">
              <li className="">
                Rejoindre une équipe produit solide et participer au
                développement d'un SaaS à fort impact.
              </li>
              <li className="">
                Monter en compétence vers un poste de Lead Developer.
              </li>
              <li className="">
                Et à terme, transmettre : enseigner le code, partager ce que
                j'ai appris, former la relève.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
};
