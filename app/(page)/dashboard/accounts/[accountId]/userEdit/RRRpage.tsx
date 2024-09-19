import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import UserEditForm from '@/app/components/Dashboard/User/RRRUserEditForm'
import { getCookies } from '@/app/helpers/getCookies'
import { getUserData } from '@/app/services/user.services'
import { UserDataTypes } from '@/app/types/user.types'
import Link from 'next/link'
import React from 'react'

export default async function UserEdit() {

  const [token, accountId, userId] = getCookies("token", "accountid", "userid")
  const userData: UserDataTypes = await getUserData(userId, token)

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}`} className="link link-border" >Perfil</Link>
      </div>
      <UserEditForm accountId={accountId} user={userData} token={token} />
    </article>
  )
}
