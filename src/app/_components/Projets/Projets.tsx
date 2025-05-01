"use client";
type Props = {};
import React from "react";
import { cn } from "../../../../lib/utils/classnames";
import { detailProject, ProjectCard, projetsCardData } from "./data";
import { DetailProject } from "./DetailProject";

export type ProjectUnion = keyof typeof detailProject;

export const Projets = ({}: Props) => {
  const [currentProject, setCurrentProject] =
    React.useState<ProjectUnion | null>("agence");

  return (
    <section className="w-full md:h-[759px] flex flex-col items-center justify-center gap-10 md:gap-0 lg:p-4 lg:pt-0 grow">
      <div className="flex gap-4 w-full items-center justify-center">
        {currentProject === null &&
          projetsCardData.map((projet, index) => (
            <Card
              key={index}
              title={projet.title}
              icon={projet.icon}
              mainClass={projet.mainClass}
              subClass={projet.subClass}
              union={projet?.union}
              setCurrentProject={setCurrentProject}
            />
          ))}
      </div>
      {currentProject === "agence" && (
        <DetailProject currentProject={currentProject} />
      )}
    </section>
  );
};
interface CardProps extends ProjectCard {
  setCurrentProject: (union: ProjectUnion) => void;
}
const Card = ({
  title,
  icon,
  mainClass,
  subClass,
  union,
  setCurrentProject,
}: CardProps) => {
  return (
    <div
      className={cn(
        "group cursor-pointer flex flex-col items-center justify-center gap-4 w-[25%] h-[350px]",
        mainClass
      )}
      onClick={() => {
        // console.log(union, "UNION");
        setCurrentProject(union);
      }}
    >
      <span className={cn("text-2xl font-bold", subClass)}>{title}</span>
      {icon}
    </div>
  );
};
