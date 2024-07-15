import Link from "next/link";


export default function ActivityList({ activities }) {

  const accountId = "85"
  const limit = 4;
  activities = activities.slice(0, limit)

  return (
    <div className="flex-1 flex flex-col">
      {activities.map(activity => <ActivityRow key={activity.id} activity={activity} accountId={accountId} />)}
    </div>
  )
}

const ActivityRow = ({ activity, accountId }) => {

  return (
    <Link href={`/dashboard/accounts/${accountId}/activity/${activity.id}`} className="flex-1 flex items-center gap-4 py-3 border-b border-gray-200 text-xl xl:border-gray-400">
      <div className="size-8 bg-primary rounded-full sm:size-12 xl:size-9"></div>
      <span className="sm:text-2xl xl:text-xl">{activity.description}</span>
      <div className="ml-auto flex flex-col items-end sm:text-2xl xl:text-lg">
        <span>
          {activity.amount < 0 && "-"}$ {activity.amount}
        </span>
        <span className="text-base sm:text-xl xl:text-base text-[#aaa] font-bold">{activity.date}</span>
      </div>
    </Link>
  )
}
