import Image from "next/image";
import Pink from "../../../../public/images/pink4.jpg";
type Props = {};

export const BackgroundImg = ({}: Props) => {
  return (
    <Image
      src={Pink}
      alt="stair"
      fill
      quality={100}
      className="cover absolute w-full h-full z-0"
    />
  );
};
