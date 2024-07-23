import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CopyButton from "@/app/components/Button/CopyButton";
import { toast } from "sonner";

export default function Transfer() {

  const accountId = "85"

  const handleCopy = (value: string) => {
    if (value === "cvu") {
      toast.success("CVU copiado")
    }
    else {
      toast.success("Alias copiado")
    }
  }

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Cargar dinero</span>
      </div>

      <div className="flex flex-col gap-8 text-white bg-my-black rounded-xl p-12 sm:py-20 xl:py-12 xl:gap-6">
        <p className="text-2xl pb-8 sm:text-3xl xl:text-xl xl:pb-0">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>

        <div className="flex justify-between relative">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary xl:text-xl">CVU</span>
            <span className="text-2xl xl:text-xl">00000021000753200000000</span>
          </div>

          <CopyButton
            value={"CVU"}
            redirectURL={`/dashboard/accounts/${accountId}/transferences/amount`}
          />
        </div>

        <hr className="sm:w-0" />

        <div className="flex justify-between relative">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary xl:text-xl">Alias</span>
            <span className="text-2xl xl:text-xl">estealiasnoexiste</span>
          </div>

          <CopyButton
            value={"Alias"}
            redirectURL={`/dashboard/accounts/${accountId}/transferences/amount`}
          />
        </div>


      </div>
    </article>
  )
}
