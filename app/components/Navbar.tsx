import Link from "next/link";
import SVGLogo from "../assets/SVG/SVGLogo";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 bg-my-black h-[48px] xl:h-[56px]">
      <SVGLogo className="text-primary" />
      <nav className="flex gap-5">
        <Link href={"/login"} >
          <Button text={"Ingresar"} className="bg-transparent text-primary" />
        </Link>
        <Link href={"/register"} >
          <Button text={"Crear cuenta"} />
        </Link>
      </nav>
    </header>
  )
}
