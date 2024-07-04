import Image from "next/image";
import desktopBG from "../../assets/desktopBG.webp"
import tabletBG from '../../assets/tabletBG.webp';
import movilBG from '../../assets/movilBG.webp';

export default function ResponsiveBG() {
  return (
    <>
      <Image
        className="hidden ms:hidden xl:block object-cover"
        src={desktopBG}
        alt="imagen del hero"
        quality={100}
        fill
        sizes="100vw"
        priority
        placeholder="blur"
      />

      <Image
        className="hidden sm:block xl:hidden object-cover"
        src={tabletBG}
        alt="imagen del hero"
        quality={100}
        height={500}
        width={900}
        sizes="100vw"
        priority
        placeholder="blur"
      />

      <Image
        className="xl:hidden sm:hidden block object-cover"
        src={movilBG}
        alt="imagen del hero"
        quality={100}
        height={600}
        width={450}
        sizes="100vw"
        priority
        placeholder="blur"
      />
    </>
  )
}
