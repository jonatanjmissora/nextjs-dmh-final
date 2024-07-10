import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import { InputForm } from '@/app/components/Form/InputForm'
import Link from 'next/link'
import React from 'react'

export default function ServiceBill() {

  const accountId = "85"
  const serviceId = "2"

  return (
    <article className="dashboard-content-container gap-7 xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}/service`}>Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-8 pb-28 rounded-xl relative sm:pb-20 xl:p-16 xl:pb-12'>
        <h2 className='text-3xl font-bold tracking-widest text-primary sm:text-4xl sm:pb-12 xl:text-3xl xl:pb-2'>Número de cuenta sin el primer 2</h2>
        <InputForm label={''} placeholder={'37289701912'} className='xl:w-1/2' />
        <p className='hidden text-my-white font-light opacity-50 text-xl px-6 sm:block xl:text-xs xl:px-0'>{"Son 11 números sin espacios, sin el '2' inicial. Agregá ceros adelante si tenés menos."}</p>

        <div className='w-full absolute flex justify-end sm:relative -bottom-[7.5rem] right-0 sm:bottom-0'>
          <Link className='button-form card-shadow w-1/2 sm:w-full sm:mt-6 xl:w-3/12' href={`/dashboard/accounts/${accountId}/service/${serviceId}/checkout`}>Continuar</Link>
        </div>
      </div>

    </article>
  )
}
