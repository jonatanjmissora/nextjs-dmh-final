import Link from "next/link";
import SearchBar from "../SearchBar";
import ActivityList from "./Activity/ActivityList";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";

export default function AccountActivity() {

  const accountId = "85"

  const activities = [
    { description: "Transferiste a Rodrigo", amount: "-1265.57", date: "Sábado" },
    { description: "Transferiste a Consorcio", amount: "-1265.57", date: "Viernes" },
    { description: "Ingresaste dinero", amount: "1265.57", date: "Viernes" },
    { description: "Te transfirieron dinero", amount: "1265.57", date: "Lunes" },
  ]

  return (
    <div className="flex flex-col gap-7 xl:gap-5">
      <SearchBar placeholder={"Buscar en tu actividad"} />
      <div className="flex-1 bg-my-white card-shadow rounded-xl p-7 py-5 sm:px-12 sm:py-16 xl:py-8">
        <h2 className="text-2xl font-medium py-3 border-b border-gray-200 sm:text-3xl sm:border-gray-400 xl:text-xl">Tu actividad</h2>
        <ActivityList activities={activities} />
        <Link className="text-lg font-medium flex justify-between items-center pt-6 sm:text-3xl xl:text-xl" href={`/dashboard/accounts/${accountId}/activity`}>
          <span>Ver toda tu actividad</span>
          <SVGRightArrow className="size-5 opacity-50 sm:size-8 sm:opacity-100 xl:size-6" />
        </Link>
      </div>
    </div>
  )
}
