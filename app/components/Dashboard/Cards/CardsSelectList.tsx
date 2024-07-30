"use client"

import SVGCheckbox from "@/app/assets/SVG/SVGCheckbox"
import SVGCheckboxFill from "@/app/assets/SVG/SVGCheckboxFill"
import { CardDataTypes } from "@/app/types/card.types"
import { useRouter, useSearchParams } from "next/navigation"

export default function CardsSelectList({ cardsData, accountId }: { cardsData: CardDataTypes[], accountId: string }) {

  //const [actualCard, setActualCard] = useState<number>(0)
  const searchParams = useSearchParams()
  const cardnum = searchParams.get('cardnum') ?? ""

  return (
    <div className="bg-my-white card py-12 px-10 sm:py-20 sm:pb-10 xl:py-12 xl:px-10 xl:pb-6">
      <h2 className="text-3xl font-bold border-transparent sm:border-b sm:border-gray-400 pb-6 xl:text-xl xl:border-b-0">Tus tarjetas</h2>
      {cardsData.map((card, index) =>
        <CardRow
          key={card.id}
          card={card}
          index={index}
          cardnum={cardnum}
          accountId={accountId}
        />)}
    </div>
  )
}

const CardRow = ({ card, index, cardnum, accountId }: { card: CardDataTypes, index: number, cardnum: string, accountId: string }) => {

  const router = useRouter()
  const cardLast4 = card.number_id.toString().substring(card.number_id.toString().length - 4)

  const handleClick = () => {
    router.replace(`/dashboard/accounts/${accountId}/deposits/card?cardnum=${index}`)
  }

  return (
    <div
      className="flex justify-between items-center border-b border-gray-400 py-14 sm:py-10 xl:py-6"
      onClick={(handleClick)}
    >
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-primary rounded-full xl:size-8"></div>
        <span className="text-2xl font-light xl:text-xl">Terminada en {cardLast4}</span>
      </div>
      {index === +cardnum
        ? <SVGCheckboxFill className="text-primary" />
        : <SVGCheckbox />
      }
    </div>
  )
}