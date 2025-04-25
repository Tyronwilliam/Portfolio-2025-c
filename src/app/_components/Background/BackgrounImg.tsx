import { NavigationLabel } from "@/app/hooks/useNavigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Forest from "../../../../public/images/japon2.png";

export const BackgroundImg = ({
  isVideo,
  selectedTab,
}: {
  isVideo: boolean;
  selectedTab: NavigationLabel;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc =
    selectedTab === NavigationLabel.Accueil
      ? "/videos/animated.mp4"
      : "/videos/animated2.mp4";
  const posterImage =
    selectedTab === NavigationLabel.Accueil
      ? "/images/animated.png"
      : "/images/animated2.png";
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);
  return isVideo ? (
    <AnimatePresence mode="wait">
      <motion.video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        id="background-video"
        poster={posterImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </motion.video>
    </AnimatePresence>
  ) : (
    <Image
      src={Forest}
      alt="bg"
      fill
      quality={100}
      className="object-cover object-center absolute w-full h-full z-0"
    />
  );
};
