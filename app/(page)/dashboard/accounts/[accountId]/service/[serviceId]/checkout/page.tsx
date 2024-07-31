import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardsSelectList from "@/app/components/Dashboard/Cards/CardsSelectList";
import ServiceCheckoutForm from "@/app/components/Dashboard/Service/ServiceCheckoutForm";
import { getCookies } from "@/app/helpers/getCookies";
import { getAccountData } from "@/app/services/account.services";
import { getCardsData } from "@/app/services/card.services";
import { getService } from "@/app/services/service.services";
import { AccountDataTypes } from "@/app/types/account.types";
import { CardDataTypes } from "@/app/types/card.types";
import { ServiceDataTypes } from "@/app/types/service.types";
import Link from "next/link";

export default async function ServiceCheckout({ params, searchParams }: { params: { serviceId: string }, searchParams: { [key: string]: string } }) {

  const [accountId, token] = getCookies("accountid", "token")
  const { serviceId } = params
  const { cardnum } = searchParams

  const serviceDataPromise: Promise<ServiceDataTypes> = await getService(serviceId)
  const cardsDataPromise: Promise<CardDataTypes[]> = await getCardsData(accountId, token)
  const accountDataPromise: Promise<AccountDataTypes> = await getAccountData(token)
  const [serviceData, cardsData, accountData] = await Promise.all([serviceDataPromise, cardsDataPromise, accountDataPromise])

  if (serviceData.invoice_value === 0) serviceData.invoice_value = 1
  const formatedAmount = new Intl.NumberFormat("de-DE").format(Number((serviceData.invoice_value * 100).toFixed(2)))

  return (
    <article className="dashboard-content-container gap-9 xl:py-8 xl:gap-6">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-5 rounded-xl relative pt-20 sm:pt-10 sm:gap-12 xl:gap-6 xl:py-8'>
        <div className="absolute right-10 top-10 sm:top-12 xl:top-9">
          <Link className="text-my-white text-xl link-border sm:text-2xl xl:text-xl" href={`/dashboard/accounts/${accountId}/service/${serviceId}?cardnum=${cardnum}`}>Ver detalles del pago</Link>
        </div>


        <h2 className='text-4xl font-medium tracking-widest text-primary xl:text-3xl'>{serviceData.name}</h2>

        <hr className="opacity-25" />
        <div className="flex justify-between text-white text-2xl font-bold sm:text-4xl xl:text-2xl">
          <span>Total a pagar</span>
          <span>${formatedAmount}</span>
        </div>
      </div>

      <CardsSelectList cardsData={cardsData} accountId={accountId} />

      <ServiceCheckoutForm account={accountData} token={token} cardnum={cardnum} service={serviceData} />
    </article>
  )
}
