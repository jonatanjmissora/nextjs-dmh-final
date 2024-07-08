import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow"
import ActivityListWithFilters from "@/app/components/Dashboard/Activity/ActivityListWithFilters"
import SearchBar from "@/app/components/SearchBar"
import Link from "next/link"

export default function Activity() {

  const accountId = "85"

  return (
    <article className="flex-1 dashboard-content-container xl:gap-8 xl:py-6">
    <div className="flex items-center gap-2 text-xl sm:hidden">
      <SVGRightArrow className="opacity-50 size-5" />
      <Link className="link link-border" href={`/dashboard/account/${accountId}/activity`}>Tu actividad</Link>
    </div>
    <SearchBar placeholder={"Busca en tu actividad"} />
    <ActivityListWithFilters />
  </article>
  )
}
