import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardsSelectList from "@/app/components/Dashboard/Cards/CardsSelectList";
import Link from "next/link";

export default function ServiceCheckout() {

  const accountId = "85"
  const serviceId = "2"
  const service = {
    "id": 1,
    "name": "Netflix",
    "date": "2023-04-30"
  }

  return (
    <article className="dashboard-content-container gap-9 xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}/service`}>Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-5 rounded-xl relative'>
        <div className="absolute right-10 top-10">
          <Link className="text-my-white text-xl link-border" href={`/dashboard/accounts/${accountId}/service/${service.id}`}>Ver detalles del pago</Link>
        </div>


        <h2 className='text-4xl font-medium tracking-widest text-primary'>{service.name}</h2>

        <hr />
        <div className="flex justify-between text-white text-2xl font-bold">
          <span>Total a pagar</span>
          <span>$1.153,75</span>
        </div>
      </div>

      <CardsSelectList />

      <div className='w-full flex justify-end'>
        <Link className='button-form card-shadow w-1/2' href={`/dashboard/accounts/${accountId}/service/${serviceId}/success`}>Pagar</Link>
      </div>
    </article>
  )
}
