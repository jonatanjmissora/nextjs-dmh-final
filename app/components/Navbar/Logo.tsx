import SVGLogo from "@/app/assets/SVG/SVGLogo"

export const Logo = ({ isAuthPath }: { isAuthPath: boolean }) => {
  const logoColor = isAuthPath ? "text-my-black" : "text-primary"

  return (
    <SVGLogo className={`text-[16px] ${logoColor} size-24 sm:size-36 xl:size-20`} />
  )
}