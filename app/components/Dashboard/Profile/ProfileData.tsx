import SVGEdit from "@/app/assets/SVG/SVGEdit"
import { getNavUser } from "@/app/helpers/gatNavUser"
import { getCookies } from "@/app/helpers/getCookies"
import { getUserData } from "@/app/services/user.services"
import { UserDataTypes } from "@/app/types/user.types"
import Link from "next/link"

export default async function ProfileData() {

  const [token, accountId, userId, userName] = getCookies("token", "accountid", "userid", "username")
  const userData: UserDataTypes = await getUserData(userId, token)
  const [, capitalName] = getNavUser(userName)

  return (
    <div className="card bg-my-white p-8 py-10 xl:py-4">
      <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 sm:text-4xl sm:border-b-0 xl:text-2xl">Tus datos</h2>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Email</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400">{userData.email}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-400" />
          </Link>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Nombre y apellido</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400">{capitalName}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-400" />
          </Link>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">DNI</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400">{userData.dni}</span>

        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Teléfono</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400">{userData.phone}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-400" />
          </Link>
        </div>
      </div>

    </div >
  )
}
