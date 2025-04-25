import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ProjectItem } from "./Accueil";
export function AnimatedCards({
  next,
  current,
}: {
  current: ProjectItem;
  next: ProjectItem;
}) {
  return (
    <div className="relative w-full max-w-[400px] flex flex-col justify-between min-h-[365px] md:items-end">
      <AnimatePresence initial={false}>
        {/* INDEX 0 */}
        <motion.div
          // layoutId={current.name}
          key={current.name}
          className="absolute h-[168px] w-full flex justify-between rounded-3xl gap-5 glassomorph_effect_bis px-2 py-4  md:py-5.5 md:px-8"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{
            x: 300,
            y: 0,
            opacity: 0,
            transition: { duration: 0.6 },
          }}
          transition={{
            ease: "linear", // Transition fluide et constante
            duration: 0.2, // Durée de l'animation
          }}
        >
          <div className="w-[123px] h-[123px] rounded-md shrink-0">
            <Image
              src={current.img}
              alt="image site"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-sm md:text-lg font-bold">{current.name}</h3>
            <div>
              <p className="text-xs">{current.description}</p>
              <div className="yellow-bg p-0.5 w-[32px] text-center h-fit text-[9px] rounded-sm text-white mt-1">
                {current.rating}
              </div>
            </div>
            {current.icon}
          </div>
        </motion.div>

        {/* INDEX 1 */}
        <motion.div
          // layoutId={next.name}
          key={next.name}
          className="absolute h-[168px] w-full flex justify-between rounded-3xl gap-5 glassomorph_effect_bis px-2 py-4  md:py-5.5 md:px-8"
          initial={{ x: 300, y: 195, opacity: 0 }}
          animate={{ x: 0, y: 195, opacity: 1 }}
          exit={{
            x: 0,
            y: 0,
            opacity: 0,
            transition: { duration: 0.1, ease: "linear" }, // Transition fluide, sans rebond
          }}
          transition={{
            type: "spring",
            ease: "linear", // Transition fluide et constante
            duration: 0.5, // Durée de l'animation
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
            <h3 className="text-sm md:text-lg font-bold">{next.name}</h3>
            <div>
              <p className="text-xs">{next.description}</p>
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
