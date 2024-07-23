import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardNew from "@/app/components/Dashboard/Cards/CardNew";
import CardsList from "@/app/components/Dashboard/Cards/CardsList";
import Link from "next/link";

export default function Cards() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container xl:gap-8 xl:py-6">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tarjetas</span>
      </div>
      <CardNew />
      <CardsList />
    </article>
  )
}
