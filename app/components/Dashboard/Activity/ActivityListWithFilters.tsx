import SVGFilter from "@/app/assets/SVG/SVGFilter";
import ActivityList from "./ActivityList";
import ActivityPagination from "./ActivityPagination";
import ActivityFilter from "./ActivityFilter";

export default function ActivityListWithFilters() {

    const activities = [
        { id: 1, description: "Transferiste a Rodrigo", amount: "-1265.57", date: "Sábado" },
        { id: 2, description: "Transferiste a Consorcio", amount: "-1265.57", date: "Viernes" },
        { id: 3, description: "Ingresaste dinero", amount: "1265.57", date: "Viernes" },
        { id: 4, description: "Te transfirieron dinero", amount: "1265.57", date: "Lunes" },
        { id: 5, description: "Pago de Netflix", amount: "-1265.57", date: "Jueves" },
    ]

    return (
        <div className="flex-1 flex flex-col bg-my-white card-shadow rounded-xl p-10 sm:py-16 xl:py-12">
            <div className="flex justify-between items-center pb-10 border-b border-gray-300">
                <span className="text-2xl font-bold">Tu actividad</span>
                <div className="sm:hidden">
                    <ActivityFilter />
                </div>
            </div>
            <ActivityList activities={activities} />
            <ActivityPagination activityLength={activities.length} />
        </div>
    )
}
