import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { InputForm } from "@/app/components/Form/InputForm";
import Link from "next/link";


export default function TransferencesAmount() {

    const accountId = "85"

  return (
    <article className="dashboard-content-container xl:py-16">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}`}>Cargar dinero</Link>
      </div>
      
      <div className="relative bg-my-black rounded-xl p-8 py-12 flex flex-col gap-8 sm:p-12 sm:pb-20 xl:py-12 xl:pb-16 xl:gap-2">
        <p className="text-4xl text-primary font-bold tracking-wider w-10/12 sm:pb-8 xl:text-3xl">¿Cuánto querés ingresar a la cuenta</p>
        <InputForm placeholder={"$0"} type="text" className="xl:w-5/12"/>
      
        <div className="w-full flex justify-end absolute -bottom-[7.5rem] right-0 sm:relative sm:bottom-0">
            <Link href={`/dashboard/accounts/${accountId}/transferences/checkout`} className="w-5/12 button-form card-shadow sm:w-full xl:w-3/12">Continuar</Link>
        </div>

      </div>


    </article>
  )
}
