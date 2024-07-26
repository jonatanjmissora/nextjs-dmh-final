import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardsSelectList from "@/app/components/Dashboard/Cards/CardsSelectList";
import Link from "next/link";

export default function ServiceCheckout() {

  const accountId = "85"
  const serviceId = "2"
  const service = {
    "id": 1,
    "name": "Netflix",
    "date": "2023-04-30",
    "invoice-value": "1.238,59",
  }

  return (
    <article className="dashboard-content-container gap-9 xl:py-8 xl:gap-6">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-5 rounded-xl relative pt-20 sm:pt-10 sm:gap-12 xl:gap-6 xl:py-8'>
        <div className="absolute right-10 top-10 sm:top-12 xl:top-9">
          <Link className="text-my-white text-xl link-border sm:text-2xl xl:text-xl" href={`/dashboard/accounts/${accountId}/service/${service.id}`}>Ver detalles del pago</Link>
        </div>


        <h2 className='text-4xl font-medium tracking-widest text-primary xl:text-3xl'>{service.name}</h2>

        <hr className="opacity-25" />
        <div className="flex justify-between text-white text-2xl font-bold sm:text-4xl xl:text-2xl">
          <span>Total a pagar</span>
          <span>${service["invoice-value"]}</span>
        </div>
      </div>

      <CardsSelectList />

      <div className='w-full flex justify-end'>
        <Link className='button-form card-shadow w-1/2 xl:w-3/12' href={`/dashboard/accounts/${accountId}/service/${serviceId}/success`}>Pagar</Link>
      </div>
    </article>
  )
}
