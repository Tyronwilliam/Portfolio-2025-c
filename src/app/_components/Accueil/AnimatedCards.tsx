import { AnimatePresence, motion } from "framer-motion";
import { ProjectItem } from "./Accueil";
import Image from "next/image";

export function AnimatedCards({
  current,
  next,
}: {
  current: ProjectItem;
  next: any;
}) {
  return (
    <div className="relative w-full md:w-[220px] min-h-[369px] md:h-full md:overflow-hidden flex flex-col justify-between items-end grow">
      <AnimatePresence initial={false}>
        {/* INDEX 0 */}
        <motion.div
          layoutId={current.name}
          key={current.name}
          className="absolute h-[168px] w-full flex justify-between rounded-3xl gap-5 glassomorph_effect_bis px-2 py-4  md:py-5.5 md:px-8"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{
            x: 300, // Exit vers la droite
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {" "}
          <div className="w-[123px] h-[123px] rounded-md shrink-0">
            <Image
              src={current.img}
              alt="image site"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-sm md:text-lg font-bold light-black ">
              {current.name}
            </h3>
            <div>
              <p className="text-xs light-black">{current.description}</p>
              <div className="yellow-bg p-0.5 w-[32px] text-center h-fit text-[9px] rounded-sm text-white mt-1">
                {current.rating}
              </div>
            </div>
            {current.icon}
          </div>
        </motion.div>

        {/* INDEX 1 */}
        <motion.div
          layoutId={next.name}
          key={next.name}
          className="absolute h-[168px] w-full flex justify-between rounded-3xl gap-5 glassomorph_effect_bis px-2 py-4  md:py-5.5 md:px-8"
          initial={{ x: 300, y: "115%", opacity: 0 }}
          animate={{ x: 0, y: "115%", opacity: 1 }}
          exit={{
            x: 0,
            y: "-115%",
            opacity: 0,
            transition: { duration: 1 },
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
        >
          <div className="w-[123px] h-[123px] rounded-md shrink-0">
            <Image
              src={next.img}
              alt="image site"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-sm md:text-lg font-bold light-black ">
              {next.name}
            </h3>
            <div>
              <p className="text-xs light-black">{next.description}</p>
              <div className="yellow-bg p-0.5 w-[32px] text-center h-fit text-[9px] rounded-sm text-white mt-1">
                {next.rating}
              </div>
            </div>
            {next.icon}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
