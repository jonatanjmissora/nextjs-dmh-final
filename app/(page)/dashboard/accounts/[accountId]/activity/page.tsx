import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow"
import ActivityFilter from "@/app/components/Dashboard/Activity/ActivityFilter"
import ActivityListWithFilters from "@/app/components/Dashboard/Activity/ActivityListWithFilters"
import SearchBar from "@/app/components/SearchBar"
import Link from "next/link"

export default function Activity() {

  const accountId = "85"

  return (
    <article className="flex-1 dashboard-content-container xl:gap-8 xl:py-6">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/account/${accountId}/activity`}>Tu actividad</Link>
      </div>
      <div className="flex gap-8">
        <div className="w-full sm:w-2/3 xl:w-10/12">
          <SearchBar placeholder={"Busca en tu actividad"} />
        </div>
        <div className="bg-primary card-shadow rounded-xl w-1/3 hidden sm:flex xl:w-2/12">
          <ActivityFilter />
        </div>
      </div>
      <ActivityListWithFilters />
    </article>
  )
}
