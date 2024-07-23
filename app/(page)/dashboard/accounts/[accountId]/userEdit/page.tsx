import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import UserEditForm from '@/app/components/Dashboard/User/UserEditForm'
import React from 'react'

export default function UserEdit() {

  const accountId = "85"

  return (
    <article className="dashboard-content-container">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Perfil</span>
      </div>
      <UserEditForm />
    </article>
  )
}
