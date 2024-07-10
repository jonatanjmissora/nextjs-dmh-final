import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import ServiceList from '@/app/components/Dashboard/Service/ServiceList'
import SearchBar from '@/app/components/SearchBar'
import Link from 'next/link'
import React from 'react'

export default function ServicePage() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}/service`}>Pagar servicios</Link>
      </div>

      <SearchBar placeholder={"Buscá entre mas de 5.000 empresas"} />
      <ServiceList />

    </article>
  )
}
