import { getCookies } from "@/app/helpers/getCookies"
import { getCardsData } from "@/app/services/card.services"
import { CardDataTypes } from "@/app/types/card.types"
import Link from "next/link"

export default async function CardsList() {

  const [accountId, token] = getCookies("accountid", "token")
  const cardsData: CardDataTypes[] = await getCardsData(accountId, token) || []


  return (
    <div className="bg-my-white card py-12 px-10 sm:py-20 xl:py-12 xl:px-10">
      <h2 className="text-3xl font-bold border-b border-gray-200 pb-6 xl:text-xl xl:border-b-0">Tus tarjetas</h2>
      {cardsData.length === 0 && <span className="p-4 text-gray-600 text-xl"><i>No existen tarjetas cargadas</i></span>}
      {cardsData.map(card => <CardRow key={card.id} card={card} accountId={accountId} />)}
    </div>
  )
}

const CardRow = ({ card, accountId }: {card: CardDataTypes, accountId: string}) => {

  const cardLast4 = card.number_id.toString().substring(card.number_id.toString().length-4)

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-14 sm:py-10 xl:py-6">
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-primary rounded-full"></div>
        <span className="text-2xl font-light xl:text-xl">Terminada en {cardLast4}</span>
      </div>
      <Link href={`/dashboard/accounts/${accountId}/cards/${card.id}/delete`} className="text-xl font-bold">Eliminar</Link>
    </div>
  )
}