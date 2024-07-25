import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import UserEditForm from '@/app/components/Dashboard/User/UserEditForm'
import { getCookies } from '@/app/helpers/getCookies'
import { getUserData } from '@/app/services/user.services'
import { UserDataTypes } from '@/app/types/user.types'
import React from 'react'

export default async function UserEdit() {

  const [token, accountId, userId] = getCookies("token", "accountid", "userid")
  const userData: UserDataTypes = await getUserData(userId, token)

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Perfil</span>
      </div>
      <UserEditForm accountId={accountId} user={userData} token={token} />
    </article>
  )
}
