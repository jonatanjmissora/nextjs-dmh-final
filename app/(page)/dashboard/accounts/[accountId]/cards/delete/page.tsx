import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardDeleteForm from "@/app/components/Dashboard/Cards/CardDeleteForm";
import CardLib from "@/app/components/Dashboard/Cards/CardLib";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function CardDelete() {

  const accountId = "85"
  const card = {
    "account_id": 85,
    "cod": 123,
    "expiration_date": "05/2027",
    "first_last_name": "PABLO GOMEZ",
    "id": 2,
    "number_id": 4545454545454545
  }

  return (
    <article className="dashboard-content-container xl:gap-8 xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}/cards`}>Tarjetas</Link>
      </div>

      <CardLib
        cvc={card.cod}
        expiry={card.expiration_date}
        name={card.first_last_name}
        number={card.number_id}

      />
      <div className="bg-my-black rounded-xl py-16 px-8 xl:w-1/2 xl:mx-auto">
        <p className="text-3xl text-white pb-8 text-center xl:text-2xl">¿Desea eliminar esta tarjeta?</p>
        <div className="w-full flex gap-4">
          <Link className="button-form card-shadow w-1/2 bg-gray-400" href={`/dashboard/accounts/${accountId}/cards`}>Cancelar</Link>

          <CardDeleteForm />

        </div>
      </div>

    </article>
  )
}
