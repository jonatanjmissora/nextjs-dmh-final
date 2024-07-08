import SVGFilter from "@/app/assets/SVG/SVGFilter";

export default function ActivityFilter() {
  return (
    <div className="flex-1 flex justify-between items-center gap-6 px-8">
      <span className="text-2xl link-border sm:after:w-0 sm:text-3xl xl:text-xl">Filtrar</span>
      <SVGFilter className={"text-primary"} />
    </div>
  )
}
