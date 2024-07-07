import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

export default function ProfileCards() {

  const accountId = "85"

  return (
    <Link href={`/dashboard/accounts/${accountId}/cards`} className="button-form card-shadow flex justify-between items-center w-full p-8">
      <span className="sm:text-4xl sm:py-9 xl:text-2xl xl:py-4">Gestioná los medios de pago</span>
      <SVGRightArrow className="size-6 sm:size-9 xl:size-7" />
    </Link>
  )
}
