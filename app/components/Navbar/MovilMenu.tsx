import SVGClose from "@/app/assets/SVG/SVGClose"
import LinksMenu from "../LinksMenu"

export const MovilMenu = ({ setShowMovilMenu }) => {

  const accountId = "85"

  return (
    <div className="absolute inset-0 z-10 bg-primary text-3xl font-bold text-black">
      <div className="h-[18%] w-full bg-my-grey-medium flex flex-col justify-end pb-12 px-20">
        <div className="w-full flex justify-end pb-8">
          <button onClick={() => setShowMovilMenu(prev => !prev)}><SVGClose className="text-primary" /></button>
        </div>
        <div className="text-primary font-medium w-1/2 flex flex-col gap-2">
          <span>Hola,</span>
          <span className="block">Mauricio Brito</span>
        </div>

      </div>
      <nav className='p-12 px-20 text-3xl font-medium flex flex-col gap-8'>
        <LinksMenu accountId={accountId} setShowMovilMenu={setShowMovilMenu} />
        <button className='w-max text-gray-600'>Cerrar sesión</button>
      </nav>
    </div>
  )
}