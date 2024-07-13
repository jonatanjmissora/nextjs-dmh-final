import SVGCopy from "@/app/assets/SVG/SVGCopy";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

export default function Transfer() {

    const accountId = "85"

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}`}>Cargar dinero</Link>
      </div>
      
      <div className="flex flex-col gap-8 text-white bg-my-black rounded-xl p-12 sm:py-20 xl:py-12 xl:gap-6">
        <p className="text-2xl pb-8 sm:text-3xl xl:text-xl xl:pb-0">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>
        
        <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary xl:text-xl">CVU</span>
                <span className="text-2xl xl:text-xl">00000021000753200000000</span>
            </div>
            <SVGCopy className="text-primary size-10 sm:size-12 xl:size-8"/>
        </div>

        <hr className="sm:w-0"/>

        <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary xl:text-xl">Alias</span>
                <span className="text-2xl xl:text-xl">estealiasnoexiste</span>
            </div>
            <SVGCopy className="text-primary size-10 sm:size-12 xl:size-8"/>
        </div>


      </div>
    </article>
  )
}
