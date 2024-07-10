import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AccountData from "@/app/components/Dashboard/Profile/AccountData";
import ProfileCards from "@/app/components/Dashboard/Profile/ProfileCards";
import ProfileData from "@/app/components/Dashboard/Profile/ProfileData";
import Link from "next/link";

export default function Profile() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}`}>Perfil</Link>
      </div>
      <ProfileData />
      <ProfileCards />
      <AccountData />
    </article>
  )
}
