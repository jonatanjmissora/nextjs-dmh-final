import { getCookies } from "@/app/helpers/getCookies";
import { getWeekDay } from "@/app/helpers/getDateData";
import { ActivityDataTypes } from "@/app/types/account.types";
import Link from "next/link";

export default function ActivityList({ activities }: { activities: ActivityDataTypes[] }) {

  const [accountId] = getCookies("accountid")
  const limit = 4;
  activities = activities.slice(0, limit)

  return (
    <div className="flex-1 flex flex-col">
      {activities.map(activity => <ActivityRow key={activity.id} activity={activity} accountId={accountId} />)}
    </div>
  )
}

const ActivityRow = ({ activity, accountId }: { activity: ActivityDataTypes, accountId: string }) => {

  return (
    <Link href={`/dashboard/accounts/${accountId}/activity/${activity.id}`} className="flex-1 flex items-center gap-4 py-3 border-b border-gray-200 text-xl xl:border-gray-400">
      <div className="size-8 bg-primary rounded-full sm:size-12 xl:size-9"></div>
      <span className="sm:text-2xl xl:text-xl">{activity.description}</span>
      <div className="ml-auto flex flex-col items-end sm:text-2xl xl:text-lg">
        <span>
          {activity.amount < 0 && "-"}$ {new Intl.NumberFormat("de-DE").format(activity.amount)}
        </span>
        <span className="text-base sm:text-xl xl:text-base text-[#aaa] font-bold">{getWeekDay(activity.dated)}</span>
      </div>
    </Link>
  )
}
