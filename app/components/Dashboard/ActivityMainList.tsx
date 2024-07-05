import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow"
import Link from "next/link"


export default function ActivityMainList({ activities }) {

  const accountId = "85"

  return (
    <div className="bg-my-white card-shadow rounded-xl p-7 py-5">
      <h2 className="text-2xl font-medium py-3 border-b border-gray-200">Tu actividad</h2>
      {activities.map(activity => <ActivityRow key={ActivityMainList.id} activity={activity} />)}
      <Link className="text-lg font-medium flex justify-between items-center pt-6" href={`/dashboard/accounts/${accountId}/activity`}>
        <span>Ver toda tu actividad</span>
        <SVGRightArrow className="size-5 opacity-50" />
      </Link>
    </div>
  )
}

const ActivityRow = ({ activity }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-200 text-xl">
      <div className="size-8 bg-primary rounded-full"></div>
      <span className="opacity-75">{activity.description}</span>
      <div className="opacity-75 ml-auto flex flex-col items-end">
        <span>
          {activity.amount < 0 && "-"}$ {activity.amount}
        </span>
        <span className="text-base opacity-60">{activity.date}</span>
      </div>
    </div>
  )
}
