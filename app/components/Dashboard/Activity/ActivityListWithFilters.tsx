import SVGFilter from "@/app/assets/SVG/SVGFilter";
import ActivityList from "./ActivityList";
import ActivityPagination from "./ActivityPagination";

export default function ActivityListWithFilters() {

    const activities = [
        { description: "Transferiste a Rodrigo", amount: "-1265.57", date: "Sábado" },
        { description: "Transferiste a Consorcio", amount: "-1265.57", date: "Viernes" },
        { description: "Ingresaste dinero", amount: "1265.57", date: "Viernes" },
        { description: "Te transfirieron dinero", amount: "1265.57", date: "Lunes" },
        { description: "Pago de Netflix", amount: "-1265.57", date: "Jueves" },
      ]

  return (
    <div className="flex-1 flex flex-col bg-my-white card-shadow rounded-xl p-10">
        <div className="flex justify-between items-center pb-10 border-b border-gray-300">
            <span className="text-3xl font-bold">Tu actividad</span>
            <div className="flex items-center gap-6">
                <span className="text-3xl">Filtrar</span>
                <SVGFilter />
            </div>
        </div>
        <ActivityList activities={activities} />
        <ActivityPagination activityLength={activities.length}/>
    </div>
  )
}
