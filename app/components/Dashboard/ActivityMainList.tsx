import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow"
import Link from "next/link"


export default function ActivityMainList({ activities }) {

  const accountId = "85"

  return (
    <div className="bg-my-white card-shadow rounded-xl p-7 py-5 sm:px-12 sm:py-16 xl:py-8">
      <h2 className="text-2xl font-medium py-3 border-b border-gray-200 sm:text-3xl sm:border-gray-400 xl:text-xl">Tu actividad</h2>
      {activities.map(activity => <ActivityRow key={ActivityMainList.id} activity={activity} />)}
      <Link className="text-lg font-medium flex justify-between items-center pt-6 sm:text-3xl xl:text-xl" href={`/dashboard/accounts/${accountId}/activity`}>
        <span>Ver toda tu actividad</span>
        <SVGRightArrow className="size-5 opacity-50 sm:size-8 sm:opacity-100 xl:size-6" />
      </Link>
    </div>
  )
}

const ActivityRow = ({ activity }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-200 text-xl xl:border-gray-400">
      <div className="size-8 bg-primary rounded-full sm:size-12 xl:size-9"></div>
      <span className="opacity-75 sm:text-2xl xl:text-xl">{activity.description}</span>
      <div className="opacity-75 ml-auto flex flex-col items-end sm:text-2xl xl:text-lg">
        <span>
          {activity.amount < 0 && "-"}$ {activity.amount}
        </span>
        <span className="text-base opacity-60 sm:text-xl xl:text-base">{activity.date}</span>
      </div>
    </div>
  )
}
