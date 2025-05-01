import Image from "next/image";
import { cn } from "../../../../lib/utils/classnames";
import { detailProject, DetailProjectType, ProjectDetail } from "./data";
import { ProjectUnion } from "./Projets";
import Test from "../../../../public/images/agence.png";
import React from "react";
interface DetailProjectProps {
  currentProject: ProjectUnion;
}

export const DetailProject = ({ currentProject }: DetailProjectProps) => {
  const [isClick, setIsClick] = React.useState(false);

  const project: ProjectDetail = detailProject[currentProject]?.[0];
  if (!project) return <p>Projet introuvable</p>;

  return (
    <section className="relative w-full md:h-full flex flex-col-reverse items-center justify-center gap-10 md:flex-row">
      {/* AGENCE */}
      <div
        className={cn(
          "bg-black w-full h-1/2 absolute z-40 top-0 left-0 ",
          isClick && "animate-shrinkHeight"
        )}
      ></div>
      <div
        className={cn(
          "absolute w-full h-full z-50 cursor-pointer top-0 left-0 text-7xl text-white text-center",
          isClick && "hidden z-0"
        )}
        onClick={() => setIsClick(true)}
      >
        <span
          className={cn(
            " w-fit h-fit top-[45%] left-0 translate-x-1/2  absolute z-50 animate-pulse",
            isClick && "z-0 hidden"
          )}
        >
          AGENCE GRAZIANI
        </span>
      </div>
      <div
        className={cn(
          "bg-black w-full h-1/2 absolute z-40 bottom-0 left-0 ",
          isClick && "animate-shrinkHeight"
        )}
      ></div>
      {/* LEFT */}
      <div
        className={cn(
          "w-full flex flex-col items-center gap-12 md:h-full md:p-8",
          currentProject === "agence" &&
            "font-robotoCondensed text-white glassomorph_effect_agence"
        )}
      >
        <div className="relative w-full h-1/5">
          <Image
            src={Test}
            alt="Aperçu du site"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-2xl shadow-md"
            priority
          />{" "}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Stack</h2>
          <ul className="flex flex-wrap items-center gap-1.5">
            {project.technologies?.map((tech, index) => (
              <li key={index} className="w-10 h-10">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          {" "}
          <h2 className="text-2xl font-semibold mb-4 ">Collaborateurs</h2>
          <span>{project.collaborators}</span>
        </div>
        <div className="text-center">
          {" "}
          <h2 className="text-2xl font-semibold mb-4">Site</h2>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Website
          </a>
        </div>
      </div>
      {/* RIGHT */}
      <div
        className={cn(
          "w-full flex flex-col gap-8 shrink-0 md:w-8/12 md:h-full  md:p-8",
          currentProject === "agence" &&
            "font-robotoCondensed text-white glassomorph_effect_agence"
        )}
      >
        {/* <div className=" font-robotoCondensed"> */}
        <h1 className="text-5xl text-center font-bold uppercase">
          {project.title}
        </h1>
        {/* </div> */}
        <div>
          <h2 className="text-2xl font-semibold">Requete client :</h2>
          <p className="text-xl mt-2">{project.clientRequest}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Défis :</h2>
          <ul className="flex flex-wrap gap-1.5">
            {project.challenges?.map((item, index) => (
              <li
                key={item}
                className="glassomorph_effect_no_radius p-1 text-lg opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Notes :</h2>
          <p className="text-xl">{project.notes}</p>
        </div>
      </div>
    </section>
  );
};
