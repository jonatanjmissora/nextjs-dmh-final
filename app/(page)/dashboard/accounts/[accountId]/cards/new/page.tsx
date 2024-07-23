import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import CardNewForm from '@/app/components/Dashboard/Cards/CardNewForm'

export default function NewCard() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tarjetas</span>
      </div>
      <CardNewForm />
    </article>
  )
}
