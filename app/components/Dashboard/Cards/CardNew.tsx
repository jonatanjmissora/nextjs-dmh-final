import SVGPlus from "@/app/assets/SVG/SVGPlus";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

export default function CardNew() {

  const accountId = "85"

  return (
    <div className="bg-my-black card-shadow text-white text-2xl font-bold flex flex-col gap-12 py-8 px-12 rounded-xl pb-16 sm:py-16 sm:pb-28 xl:pb-10 xl:text-xl xl:gap-6">
      <h2>Agregá tu tarjeta de débito o crédito</h2>
      <Link className="text-primary flex justify-between items-center" href={`/dashboard/accounts/${accountId}/cards/new`}>
        <div className="flex gap-8 items-center">
          <SVGPlus />
          <span className="text-4xl xl:text-2xl">Nueva tarjeta</span>
        </div>
        <SVGRightArrow />
      </Link>
    </div>
  )
}
