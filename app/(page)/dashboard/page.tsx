import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AccountActions from "@/app/components/Dashboard/AccountActions";
import AccountActivity from "@/app/components/Dashboard/AccountActivity";
import AccountCard from "@/app/components/Dashboard/AccountCard";
import Link from "next/link";

export default function Dashboard() {

  return (
    <article className="dashboard-content-container">

      <div className="flex items-center gap-2 text-xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-5" />
        <Link className="link link-border" href={`/dashboard`}>Inicio</Link>
      </div>

      <AccountCard />
      <AccountActions />
      <AccountActivity />
    </article>
  )
}
