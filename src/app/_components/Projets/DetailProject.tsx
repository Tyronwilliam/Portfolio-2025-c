import Image from "next/image";
import React, { useEffect } from "react";
import { cn } from "../../../../lib/utils/classnames";
import { detailProject } from "./data";
import { ProjectUnion } from "./Projets";
interface DetailProjectProps {
  currentProject: ProjectUnion;
  backTo: (arg: null) => void;
}

export const DetailProject = ({
  currentProject,
  backTo,
}: DetailProjectProps) => {
  const [isClick, setIsClick] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const project = detailProject[currentProject]?.[0];
  useEffect(() => {
    if (currentProject !== null) {
      setVisible(true);
    }
  }, [currentProject]);
  if (!project) return <p>Projet introuvable</p>;

  const isAgence = currentProject === "agence";
  const isCoop = currentProject === "coop";
  const isCsb = currentProject === "csb";

  return (
    <section
      className={cn(
        "relative w-full h-full flex flex-col-reverse gap-10 md:flex-row",
        "transition-opacity duration-500",
        isCsb ? "text-black" : "text-white",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      {isAgence && <MockUpCinema isClick={isClick} setIsClick={setIsClick} />}

      {/* LEFT COLUMN */}
      <aside
        className={cn(
          "w-full grow md:max-w-[35%] xl:max-w-[25%] flex flex-col items-center p-3 gap-12 md:p-8",
          isAgence && "font-robotoCondensed text-white bg-black",
          isCoop && "font-montserrat bg-[#5a675a] beatuy_radius-right",
          isCsb && "font-roboto bg-white rounded-md"
        )}
      >
        <div className="relative w-full h-[250px] md:h-1/5">
          <Image
            src={project.photo}
            alt="Aperçu du site"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        <Section title="Stack" customClass="text-center" isCsb={isCsb}>
          <ul className="flex flex-wrap items-center justify-center gap-1.5">
            {project.technologies?.map((tech, i) => (
              <li
                key={i}
                className={cn(
                  "w-10 h-10",
                  isCsb && i === 4 ? "text-black" : "text-white"
                )}
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Collaborateurs" customClass="text-center" isCsb={isCsb}>
          <span className="text-center">{project.collaborators}</span>
        </Section>

        <Section title="Site" customClass="text-center" isCsb={isCsb}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500 transition"
          >
            View Website
          </a>
        </Section>

        <button
          aria-label="back"
          onClick={() => backTo(null)}
          className={cn(
            "p-3 rounded-sm transition-all",
            isCoop &&
              "border-[#e9b535] border hover:text-[#5a675a] hover:bg-[#e9b535]",
            isAgence && "border-white border hover:bg-white hover:text-black",
            isCsb &&
              "border-[#2f98e9] bg-[#2f98e9] text-white hover:text-[#085b89] hover:bg-white"
          )}
        >
          Back
        </button>
      </aside>

      {/* RIGHT COLUMN */}
      <main
        className={cn(
          "relative w-full flex-1 h-full flex flex-col gap-8 p-3 overflow-y-scroll scroll-container scrollbar-hide",
          isAgence && "font-robotoCondensed bg-black md:p-6",
          isCoop && "font-montserrat text-white md:p-6",
          isCsb && "font-roboto bg-white rounded-md md:px-8 md:py-6"
        )}
      >
        {isCoop ? (
          <>
            <div className="container_title text-8xl font-bold mb-12 md:mb-8 z-50 font-ptSansNarrow">
              <h1 className="title">{project.title}</h1>
              <h1 className="title">{project.title}</h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-1 beatuy_radius-right bg-[#5a675a]" />
          </>
        ) : (
          <h1
            className={cn(
              "text-5xl text-center font-bold uppercase",
              isCsb && "text-[#085b89] font-raleway"
            )}
          >
            {project.title}
          </h1>
        )}

        <Section title="Requête client :" isCsb={isCsb}>
          <p className="text-xl">{project.clientRequest}</p>
        </Section>

        <Section title="Défis :" isCsb={isCsb}>
          <ul className="flex flex-wrap gap-1.5">
            {project.challenges?.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "p-1 text-lg opacity-0 animate-fadeIn",
                  isAgence && "glassomorph_effect_no_radius",
                  isCoop && "glassomorph_effect_coop",
                  isCsb && "light_blue_bg_csb text-white"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Notes :" isCsb={isCsb}>
          <p className="text-xl">{project.notes}</p>
        </Section>
      </main>
    </section>
  );
};

const Section = ({
  title,
  isCsb,
  children,
  customClass,
}: {
  title: string;
  isCsb: boolean;
  children: React.ReactNode;
  customClass?: string;
}) => (
  <div className="flex flex-col gap-2">
    <h2
      className={cn(
        "text-2xl font-semibold",
        isCsb && "font-raleway",
        customClass && customClass
      )}
    >
      {title}
    </h2>
    {children}
  </div>
);

const MockUpCinema = ({
  isClick,
  setIsClick,
}: {
  isClick: boolean;
  setIsClick: (arg: boolean) => void;
}) => {
  return (
    <>
      {/* Top black panel */}
      <div
        className={cn(
          "bg-black md:absolute md:top-0 md:left-0 md:w-full md:h-[55%] z-40",
          isClick && "animate-shrinkHeight"
        )}
      />

      {/* Click overlay */}
      {!isClick && (
        <div
          className="md:absolute md:top-0 md:left-0 md:w-full md:h-full z-50 cursor-pointer"
          onClick={() => setIsClick(true)}
        />
      )}

      {/* Centered title */}
      {!isClick && (
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-7xl text-white text-center animate-pulse md:block hidden">
          AGENCE GRAZIANI
        </div>
      )}

      {/* Bottom black panel */}
      <div
        className={cn(
          "bg-black md:absolute md:bottom-0 md:left-0 md:w-full md:h-1/2 z-30",
          isClick && "animate-shrinkHeight"
        )}
      />
    </>
  );
};
