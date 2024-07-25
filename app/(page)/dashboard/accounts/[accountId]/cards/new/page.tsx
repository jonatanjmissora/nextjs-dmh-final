import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import CardNewForm from '@/app/components/Dashboard/Cards/CardNewForm'
import { getCookies } from '@/app/helpers/getCookies'

export default function NewCard() {

  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container h-[85vh]">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tarjetas</span>
      </div>
      <CardNewForm accountId={accountId} />
    </article>
  )
}
