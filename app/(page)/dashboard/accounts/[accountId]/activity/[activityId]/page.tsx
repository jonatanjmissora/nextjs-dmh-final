import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

const datedForm = (dated) => {
  return "Creada el 17 de agosto 2022 a 16:34 hs"
}

export default function ActivityId() {

  const accountId = "85"
  const activity = {
    account_id: 85,
    amount: 1523,
    dated: "2024-06-23T16:56:00.000Z",
    description: "Pago de Netflix",
    destination: "Rodrigo Vaccaro",
    id: 3,
    origin: "cuenta propia",
    type: "Trasaction"
  }

  return (
    <article className="w-full flex-1 dashboard-content-container xl:gap-8 xl:py-16">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tu actividad</span>
      </div>
      <div className="bg-my-black card p-8 text-white sm:p-28 relative xl:px-10 xl:py-3 xl:pb-8">
        <div className="text-primary flex gap-6 py-6 px-4 pb-10 xl:pb-5">
          <SVGCheck className="size-12 sm:size-10 xl:size-8" />
          <span className="text-4xl font-bold sm:text-3xl xl:text-2xl">Aprobada</span>
        </div>
        <hr />
        <div className="flex flex-col gap-8 xl:gap-6">
          <span className="pt-5 px-4 text-2xl sm:absolute sm:top-10 sm:right-10 xl:text-xl xl:top-5 xl:right-5">{datedForm(activity.dated)}</span>

          <div className="px-4 flex flex-col gap-3 sm:pt-8 xl:gap-1">
            <span className="text-2xl xl:text-xl">Transferencia de dinero</span>
            <span className="text-3xl font-bold text-primary xl:text-2xl">$ {activity.amount}</span>
          </div>

          <div className="px-4 flex flex-col gap-3 xl:gap-1">
            <span className="text-2xl xl:text-xl">Le transferiste a </span>
            <span className="text-3xl font-bold text-primary sm:text-4xl xl:text-2xl">{activity.destination}</span>
          </div>

          <div className="px-4 flex flex-col gap-3 xl:gap-1">
            <span className="text-2xl xl:text-xl">Número de operación</span>
            <span className="text-3xl text-primary font-light xl:text-2xl">{activity.id}</span>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-end sm:flex-row-reverse gap-8 xl:w-1/2 xl:ml-auto">
        <Link className="button-form bg-gray-400 card-shadow" href={`/dashboard`}>Descargar comprobante</Link>
        <Link className="button-form card-shadow" href={`/dashboard`}>Ir al inicio</Link>
      </div>

    </article>
  )
}
