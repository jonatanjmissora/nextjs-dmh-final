import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AccountActions from "@/app/components/Dashboard/AccountActions";
import AccountActivity from "@/app/components/Dashboard/AccountActivity";
import AccountCard from "@/app/components/Dashboard/AccountCard";
import Link from "next/link";

export default function Dashboard() {

  return (
    <article className="dashboard-content-container">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link className="link link-border" href={`/dashboard`}>Inicio</Link>
      </div>

      <AccountCard />
      <AccountActions />
      <AccountActivity />
    </article>
  )
}
