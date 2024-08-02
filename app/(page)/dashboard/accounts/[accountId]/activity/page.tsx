import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow"
import ActivityFilter from "@/app/components/Dashboard/Activity/ActivityFilter"
import ActivityListWithFilters from "@/app/components/Dashboard/Activity/ActivityListWithFilters"
import Loading from "@/app/components/Loading";
import SearchBar from "@/app/components/SearchBar"
import { getActualActivities } from "@/app/helpers/getActualActivities";
import { getCookies } from "@/app/helpers/getCookies";
import { getActivitiesData } from "@/app/services/activity.services";
import { ActivityDataTypes } from "@/app/types/account.types";
import { Suspense } from "react";

const ACTIVITIES_PER_PAGE = 4;

export default async function Activity({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const search = searchParams.search
  const filter = searchParams.filter
  const page = searchParams.page ?? "1"

  const [token, accountId] = getCookies("token", "accountid")
  const activitiesData: ActivityDataTypes[] = await getActivitiesData(accountId, token)

  const filteredActivities = getActualActivities(activitiesData, filter, search)
  const start = (Number(page) - 1) * Number(ACTIVITIES_PER_PAGE)
  const end = start + Number(ACTIVITIES_PER_PAGE)
  const activitiesToShow = filteredActivities.slice(start, end)

  return (
    <article className="flex-1 dashboard-content-container xl:gap-8 xl:py-6">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tu actividad</span>
      </div>
      <div className="flex gap-8">
        <div className="w-full sm:w-2/3 xl:w-10/12">
          <SearchBar placeholder={"Buscar en tu actividad"} />
        </div>
        <div className="bg-primary card w-1/3 hidden sm:flex sm:justify-center sm:items-center xl:w-2/12">
          <ActivityFilter />
        </div>
      </div>
      <Suspense key={`${search}-${filter}-${page}`} fallback={<Loading />}>
        <ActivityListWithFilters
          activities={activitiesToShow}
          activitiesLength={filteredActivities.length}
        />
      </Suspense>
    </article>
  )
}
