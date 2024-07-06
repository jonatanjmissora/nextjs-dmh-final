import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AccountData from "@/app/components/Dashboard/Profile/AccountData";
import ProfileCards from "@/app/components/Dashboard/Profile/ProfileCards";
import ProfileData from "@/app/components/Dashboard/Profile/ProfileData";
import Link from "next/link";

export default function Profile() {
  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-2 text-xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-5" />
        <Link className="link link-border" href={`/dashboard/profile`}>Perfil</Link>
      </div>
      <ProfileData />
      <ProfileCards />
      <AccountData />
    </article>
  )
}
