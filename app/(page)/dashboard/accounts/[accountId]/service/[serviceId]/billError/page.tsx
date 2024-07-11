import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import SVGWrong from '@/app/assets/SVG/SVGWrong'
import Link from 'next/link'
import React from 'react'

export default function BillError() {

  const accountId = "85"
  const serviceId = "2"

  return (
    <article className="dashboard-content-container gap-7 xl:py-16  xl:gap-0">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}/service`}>Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-12 flex flex-col justify-center items-center gap-8 rounded-xl relative sm:py-20 xl:p-16'>

        <SVGWrong className='size-16 sm:size-28 xl:size-20' />
        <h2 className='text-3xl font-bold tracking-widest text-white text-center sm:text-4xl sm:px-28 xl:text-3xl xl:px-0'>No encontramos facturas asociadas a este dato</h2>

        <hr className='w-full opacity-75' />

        <p className='text-white opacity-50 text-lg text-center sm:px-28 xl:px-0 xl:w-1/2'>Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura</p>

      </div>

      <div className='w-full flex justify-end'>
        <Link className='button-form card-shadow w-1/2 sm:w-full sm:mt-6 xl:w-3/12' href={`/dashboard/accounts/${accountId}/service/${serviceId}/bill`}>Revisar dato</Link>
      </div>

    </article>
  )
}
