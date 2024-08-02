import ActivityList from "./ActivityList";
import ActivityPagination from "./ActivityPagination";
import ActivityFilter from "./ActivityFilter";
import { ActivityDataTypes } from "@/app/types/account.types";

export default async function ActivityListWithFilters({ activities, activitiesLength }: { activities: ActivityDataTypes[], activitiesLength: number }) {

    return (
        <div className="flex-1 flex flex-col bg-my-white rounded-xl shadow-2xl p-10 sm:py-16 xl:py-12">
            <div className="flex justify-between items-center pb-10 border-b border-gray-300">
                <span className="sm:text-3xl xl:text-2xl font-bold">Tu actividad</span>
                <div className="sm:hidden">
                    <ActivityFilter />
                </div>
            </div>
            <ActivityList activities={activities} />
            <ActivityPagination activitiesLength={activitiesLength} />
        </div>
    )
}
