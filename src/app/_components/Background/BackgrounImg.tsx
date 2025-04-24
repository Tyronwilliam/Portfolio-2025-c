import Image from 'next/image'
import Pink from '../../../../public/images/pink4.jpg'
import Bubble from '../../../../public/images/bubble-black.jpg'
type Props = {}

export const BackgroundImg = ({}: Props) => {
  return (
    <Image
      src={Bubble}
      alt="stair"
      fill
      quality={100}
      className="object-cover absolute w-full h-full z-0"
    />
  )
}
