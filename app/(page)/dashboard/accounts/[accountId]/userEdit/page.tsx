import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import Link from 'next/link'
import React from 'react'

export default function UserEdit() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}`}>Perfil</Link>
      </div>
      aca va el form
    </article>
  )
}
