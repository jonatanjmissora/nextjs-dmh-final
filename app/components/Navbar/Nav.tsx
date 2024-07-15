import SVGMenu from "@/app/assets/SVG/SVGMenu"
import Link from "next/link"
import Menu from "./Menu"

export const Nav = ({ pathname }: { pathname: string }) => {

  const name = "Jonatan_Missora"
  //const name = undefined


  if (name) {

    const [firstname, lastname] = name.split("_")
    const avatar = `${firstname.charAt(0).toUpperCase()} ${lastname.charAt(0).toUpperCase()}`

    return (
      <div className="flex items-center">

        <div className="flex justify-between items-center gap-5">
          <div className=" bg-primary font-bold rounded-xl tracking-tighter p-2 text-2xl sm:text-3xl sm:p-3 xl:text-xl xl:p-2 2xl:p-1 2xl:text-base">{avatar}</div>
          <div>
            <span className="text-white  font-bold hidden sm:flex sm:text-3xl xl:text-xl">{`Hola, ${firstname} ${lastname}`}</span>

          </div>
        </div>
        {/*
        <SVGMenu className="text-primary size-11 sm:hidden" />
*/}

        <Menu />

      </div>
    )
  }

  else if (pathname === "/register") {
    return <Link href={"/login"} className="nav-btn bg-my-grey-medium text-white">Iniciar sesión
    </Link>
  }

  else if (pathname === "/")
    return (
      <nav className="flex gap-8 xl:gap-5">
        <Link href={"/login"} >
          <button className="nav-btn bg-transparent text-primary">Ingresar</button>

        </Link>
        <Link href={"/register"} >
          <button className="nav-btn">Crear cuenta</button>
        </Link>
      </nav>
    )
}