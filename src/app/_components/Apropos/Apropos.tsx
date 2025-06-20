import { motion } from 'framer-motion'
import { useRef } from 'react'

export const Apropos = () => {
  const scrollRef = useRef(null)

  return (
    <section
      className="w-full h-full flex flex-col items-center gap-5 md:gap-10 text-white"
      ref={scrollRef}
    >
      {/* Intro "Qui suis-je" */}
      <motion.div
        className="w-full max-w-[750px] mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ root: scrollRef, once: true }}
      >
        <h1 className="w-fit mx-auto p-2 text-3xl font-bold ">Qui suis-je ?</h1>
        <p className="p-2 leading-10">
          Je m&apos;appelle Tyron-William Chanu, actuellement développeur frontend chez Veepee|Ad.
          Mon truc, c&apos;est créer des{' '}
          <span className="glassomorph_effect_bis p-1">interfaces fluides </span>,{' '}
          <span className="glassomorph_effect_bis p-1">accessibles</span> et{' '}
          <span className="glassomorph_effect_bis p-1">performantes</span>.
        </p>
      </motion.div>

      {/* Contenu principal (parcours + compétences) */}
      <section className="w-full f flex flex-col lg:flex-row gap-10">
        {/* Parcours */}
        <article className="md:flex flex-col space-y-4 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ root: scrollRef, once: true }}
            className="text-white relative  px-8 py-6 w-full flex flex-col  gap-4 xl:items-center xl:justify-center"
          >
            <div className="absolute top-0 left-0 glassomorph_effect_bis w-full h-full -z-1"></div>
            <p>
              Après plusieurs emplois alimentaires, j&apos;ai découvert le développement web un peu
              par hasard, pendant le Covid, en tentant de créer mes propres jeux vidéo. Très vite,
              j&apos;ai commencé à coder de petits sites avec HTML, CSS, JS.
            </p>
            <p>
              Poussé par cette passion naissante, j&apos;ai quitté mon job et mon appart pour
              retourner vivre en famille et me consacrer pleinement à l&apos;apprentissage.
              J&apos;ai intégré la 3W Academy, une formation courte mais solide qui m&apos;a donné
              de bonnes bases.
            </p>
            <p>
              Mon premier job en alternance n&apos;a pas duré — je n&apos;avais pas encore le niveau
              — mais au lieu d&apos;abandonner, j&apos;ai redoublé d&apos;efforts.
            </p>
            <p>
              J&apos;apprends mieux sous pression avec des projets concrets, alors je me suis lancé
              en freelance. Une première mission, puis une autre… création de maquettes, relation
              client, vulgarisation technique, création de back-office, développement front-end,
              déploiement sur OVH. J&apos;ai appris en marchant.
            </p>
            <p>
              En quelques mois, j&apos;ai travaillé avec des développeurs confirmés, dans des
              projets variés, jusqu&apos;à décrocher un CDD chez Veepee, devenu CDI.
            </p>
          </motion.div>
        </article>

        {/* Compétences et objectifs */}
        <aside className="flex flex-col  text-sm gap-4 w-full lg:w-[30%] shrink-0 justify-between">
          {/* Compétences clés */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Compétences clés</h1>
            <ul className="flex flex-wrap gap-2 items-center justify-center">
              {['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass'].map(
                (tech, i) => (
                  <motion.li
                    key={tech}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollRef, once: true }}
                    className="relative  p-1 w-fit"
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="absolute top-0 left-0 glassomorph_effect_bis w-full h-full -z-1"></div>

                    {tech}
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Focus */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Focus</h1>
            <ul className="flex flex-wrap gap-2 items-center justify-center">
              {['Performance', 'Accessibilité', 'Clarté'].map((focus, i) => (
                <motion.li
                  key={focus}
                  viewport={{ root: scrollRef, once: true }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 1, duration: 0.4, ease: 'easeOut' }}
                  className="relative p-1 w-fit"
                >
                  <div className="absolute top-0 left-0 glassomorph_effect_bis w-full h-full -z-1"></div>
                  {focus}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Objectifs */}
          <div className="space-y-2">
            <h1 className="text-lg text-center font-bold">Mes objectifs</h1>
            <motion.ul
              className="relative flex flex-col gap-2 list-disc list-inside text-left  px-4 py-2"
              viewport={{ root: scrollRef, once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.4, ease: 'easeOut' }}
            >
              {' '}
              <div className="absolute top-0 left-0 glassomorph_effect_bis w-full h-full -z-1"></div>
              <li>
                Rejoindre une équipe produit solide et participer au développement d&apos;un SaaS à
                fort impact.
              </li>
              <li>Monter en compétence vers un poste de Lead Developer.</li>
              <li>
                Transmettre : enseigner le code, partager ce que j&apos;ai appris, former la relève.
              </li>
            </motion.ul>
          </div>
        </aside>
      </section>
    </section>
  )
}
