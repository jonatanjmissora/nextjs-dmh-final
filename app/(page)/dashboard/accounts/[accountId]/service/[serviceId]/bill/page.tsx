import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import { InputForm } from '@/app/components/Input/InputForm'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function ServiceBill() {

  const accountId = "85"
  const serviceId = "2"

  const submitAction = async (formData: FormData) => {
    "use server"
    const billNumber = formData.get("billNumber")
    if (!billNumber || billNumber === "") return
    if (billNumber !== "99999999999") {
      redirect(`/dashboard/accounts/${accountId}/service/${serviceId}/billError`)
    }
    redirect(`/dashboard/accounts/${accountId}/service/${serviceId}/checkout`)
  }

  return (
    <article className="dashboard-content-container gap-7 xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-8 pb-28 rounded-xl relative sm:pb-20 xl:p-16 xl:pb-12'>

        <form action={submitAction}>
          <h2 className='text-3xl font-bold tracking-widest text-primary pb-8 sm:text-4xl sm:pb-28 xl:text-3xl xl:pb-12'>Número de cuenta sin el primer 2</h2>
          <InputForm name={'billNumber'} placeholder={'37289701912'} type="text" className='xl:w-1/2' />
          <p className='hidden font-light text-gray-300 text-xl p-6 sm:block xl:text-xs xl:px-0'>{"Son 11 números sin espacios, sin el '2' inicial. Agregá ceros adelante si tenés menos."}</p>

          <div className='w-full absolute flex justify-end sm:relative -bottom-[7.5rem] right-0 sm:bottom-0'>

            <button className='button-form card-shadow w-1/2 sm:w-full sm:mt-6 xl:w-3/12' type="submit">Continuar</button>

          </div>
        </form>
      </div>

    </article>
  )
}