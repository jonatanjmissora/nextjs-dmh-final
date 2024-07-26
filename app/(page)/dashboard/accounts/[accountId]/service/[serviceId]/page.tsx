import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

const datedFormat = (date: string) => {
  return "17 de agosto 2022."
}

export default function ServiceId() {

  const accountId = "85"
  const service = {
    "id": 1,
    "name": "Netflix",
    "date": "2023-04-30",
    "invoice-value": "1.238,59",
  }

  return (
    <article className="dashboard-content-container gap-9 xl:gap-6 xl:pt-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className="rounded-xl bg-my-black text-white p-10 flex flex-col gap-12 sm:p-16 sm:px-24 xl:py-10 xl:gap-5">

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Servicio</span>
          <span className="text-3xl font-bold text-primary sm:text-4xl xl:text-3xl" >{service.name}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Importe</span>
          <span className="text-3xl font-bold text-primary xl:text-2xl" >${service["invoice-value"]}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Vencimiento</span>
          <span className="text-3xl xl:text-2xl" >{datedFormat(service.date)}</span>
        </div>
      </div>

      <div className='w-full flex flex-col gap-8 sm:flex-row-reverse'>
        <Link className='button-form card-shadow sm:w-1/2 xl:w-3/12 xl:ml-auto' href={`/dashboard/accounts/${accountId}/service/${service.id}/checkout`}>Volver</Link>
      </div>
    </article>
  )
}
