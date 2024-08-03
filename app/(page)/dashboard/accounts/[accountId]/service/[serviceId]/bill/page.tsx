import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import { InputForm } from '@/app/components/Input/InputForm'
import { getCookies } from '@/app/helpers/getCookies'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function ServiceBill({ params }: { accountId: string, params: { serviceId: string } }) {
  const [accountId] = getCookies("accountid")
  const serviceId = params.serviceId

  const submitAction = async (formData: FormData) => {
    "use server"
    const billNumber = formData.get("billNumber")
    if (!billNumber || billNumber === "") return
    if (billNumber !== "99999999999") {
      redirect(`/dashboard/accounts/${accountId}/service/${serviceId}/billError`)
    }
    redirect(`/dashboard/accounts/${accountId}/service/${serviceId}/checkout?cardnum=0`)
  }

  return (
    <article className="dashboard-content-container gap-7 xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-8 pb-24 rounded-xl relative sm:p-12 sm:pb-20 xl:p-16 xl:pb-12'>

        <form action={submitAction}>
          <h2 className='text-3xl font-bold tracking-widest text-primary pb-8 w-[70%] sm:w-full sm:text-4xl sm:py-8 sm:pb-20 xl:text-3xl xl:pb-12'>Número de cuenta sin el primer 2</h2>
          <input className='input-form w-full h-20 sm:h-28 xl:w-1/2 xl:h-20' type="text" name={'billNumber'} />
          <p className='pl-6 text-gray-400 xl:pl-0 xl:text-sm'>( coloca 99999999999 para validar )</p>
          <p className='tracking-normal hidden font-light text-gray-300 text-xl p-6 sm:block xl:text-sm xl:px-0'>{"Son 11 números sin espacios, sin el '2' inicial. Agregá ceros adelante si tenés menos."}</p>

          <div className='w-full absolute flex justify-end sm:relative -bottom-[7.5rem] right-0 sm:bottom-0'>

            <button className='button-form card-shadow w-1/2 h-20 sm:h-28 sm:w-full sm:mt-6 xl:w-3/12 xl:h-20' type="submit">Continuar</button>

          </div>
        </form>

      </div>

    </article>
  )
}