'use client'
import React, { useRef } from 'react'
import { cn } from '../../../../lib/utils/classnames'
import { detailProject, ProjectCard, projetsCardData } from './data'
import { DetailProject } from './DetailProject'
import { motion } from 'framer-motion'

export type ProjectUnion = keyof typeof detailProject

export const Projets = () => {
  const [currentProject, setCurrentProject] = React.useState<ProjectUnion | null>(null)
  const scrollRefProject = useRef(null)
  return (
    <div className="flex flex-col gap-5 w-full pb-5" ref={scrollRefProject}>
      <h1 className="w-fit mx-auto p-2 text-3xl font-bold text-white">Projets</h1>
      {currentProject === null && (
        <div
          className={cn(
            'flex flex-col md:flex-row gap-4 w-full items-center justify-center',
            currentProject === null && ''
          )}
        >
          {projetsCardData.map((projet, index) => (
            <Card
              key={index}
              i={index}
              title={projet.title}
              icon={projet.icon}
              mainClass={projet.mainClass}
              subClass={projet.subClass}
              union={projet?.union}
              setCurrentProject={setCurrentProject}
            />
          ))}
        </div>
      )}
      {currentProject !== null && (
        <DetailProject currentProject={currentProject} backTo={setCurrentProject} />
      )}
    </div>
  )
}
interface CardProps extends ProjectCard {
  setCurrentProject: (union: ProjectUnion) => void
  i: number
}
const Card = ({ title, icon, mainClass, subClass, union, setCurrentProject, i }: CardProps) => {
  return (
    <motion.div
      className={cn(
        'group cursor-pointer flex flex-col items-center justify-center gap-4 w-full max-w-[350px] md:w-[33.33%] h-[300px] text-center relative',
        mainClass
      )}
      initial={{ opacity: 0, x: 250 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.2, duration: 0.4, ease: 'easeOut' }}
      viewport={{ amount: 0.2, once: true }}
      onClick={() => {
        setCurrentProject(union)
      }}
    >
      {/* <div className={cn('absolute top-0 left-0  w-full h-full z-10', mainClass)}></div> */}
      <span className={cn('text-2xl font-bold z-50', subClass)}>{title}</span>
      {icon}
    </motion.div>
  )
}
