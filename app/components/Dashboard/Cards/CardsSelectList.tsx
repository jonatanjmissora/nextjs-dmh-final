import SVGCheckbox from "@/app/assets/SVG/SVGCheckbox"
import SVGCheckboxFill from "@/app/assets/SVG/SVGCheckboxFill"

export default function CardsSelectList() {

  const cardsData = [
    { id: 1, number: 4067 },
    { id: 2, number: 8040 },
    { id: 3, number: 9006 },
  ]
  const cardSelected = 2;

  return (
    <div className="bg-my-white card py-12 px-10 sm:py-20 sm:pb-10 xl:py-12 xl:px-10 xl:pb-6">
      <h2 className="text-3xl font-bold border-transparent sm:border-b sm:border-gray-400 pb-6 xl:text-xl xl:border-b-0">Tus tarjetas</h2>
      {cardsData.map(card => <CardRow key={card.id} card={card} cardSelected={cardSelected} />)}
    </div>
  )
}

const CardRow = ({ card, cardSelected }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-400 py-14 sm:py-10 xl:py-6">
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-primary rounded-full xl:size-8"></div>
        <span className="text-2xl font-light xl:text-xl">Terminada en {card.number}</span>
      </div>
      {cardSelected === card.id
        ? <SVGCheckboxFill className="text-primary" />
        : <SVGCheckbox />
      }
    </div>
  )
}