'use client'
import React from 'react'
import { cn } from '../../../../lib/utils/classnames'
import { detailProject, ProjectCard, projetsCardData } from './data'
import { DetailProject } from './DetailProject'

export type ProjectUnion = keyof typeof detailProject

export const Projets = () => {
  const [currentProject, setCurrentProject] = React.useState<ProjectUnion | null>(null)

  return (
    <div className={cn('flex flex-col gap-5 w-full   ')}>
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
              title={projet.title}
              icon={projet.icon}
              mainClass={projet.mainClass}
              subClass={projet.subClass}
              union={projet?.union}
              delay={projet?.delay}
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
}
const Card = ({ title, icon, mainClass, subClass, union, setCurrentProject, delay }: CardProps) => {
  return (
    <div
      className={cn(
        'group cursor-pointer flex flex-col items-center justify-center gap-4 w-full max-w-[350px] md:w-[33.33%] h-[300px] text-center',
        mainClass
      )}
      style={{ animationDelay: `${delay}s` }}
      onClick={() => {
        setCurrentProject(union)
      }}
    >
      <span className={cn('text-2xl font-bold', subClass)}>{title}</span>
      {icon}
    </div>
  )
}
