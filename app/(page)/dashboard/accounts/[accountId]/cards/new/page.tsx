import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import CardNewForm from '@/app/components/Dashboard/Cards/CardNewForm'
import Link from 'next/link'

export default function NewCard() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container xl:gap-8 xl:py-16">
      <div className="flex items-center gap-2 text-xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-5" />
        <Link className="link link-border" href={`/dashboard/account/${accountId}/cards`}>Tarjetas</Link>
      </div>
      <CardNewForm />
    </article>
  )
}
