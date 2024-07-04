import Link from "next/link";
import SVGLogo from "../assets/SVG/SVGLogo";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 bg-my-black h-[56px] sm:h-[60px] 2xl:h-[64px]">
      <SVGLogo className="text-[16px] text-primary size-24 sm:size-36 xl:size-20" />
      <nav className="flex gap-8 xl:gap-5">
        <Link href={"/login"} >
          <button className="nav-btn bg-transparent text-primary">Ingresar</button>

        </Link>
        <Link href={"/register"} >
          <button className="nav-btn">Crear cuenta</button>
        </Link>
      </nav>
    </header>
  )
}
