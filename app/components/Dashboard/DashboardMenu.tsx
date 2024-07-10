import Link from 'next/link'
import React from 'react'

export default function DashboardMenu() {

  const accountId = "85"

  return (
    <aside className='hidden sm:block sm:w-[26%] sm:bg-primary sm:px-14 sm:py-24 xl:w-[18%] xl:px-12 xl:py-16'>
      <nav className='text-3xl flex flex-col gap-6 xl:text-xl xl:gap-3 xl:fixed'>
        <Link className='' href={`/dashboard`}>Inicio</Link>
        <Link className='' href={`/dashboard/accounts/${accountId}/activity`}>Actividad</Link>
        <Link className='' href={`/dashboard/accounts/${accountId}`}>Tu perfil</Link>
        <Link className='' href={`/dashboard/accounts/${accountId}/deposits`}>Cargar dinero</Link>
        <Link className='' href={`/dashboard/accounts/${accountId}/service`}>Pagar Servicios</Link>
        <Link className='' href={`/dashboard/accounts/${accountId}/cards`}>Tarjetas</Link>
        <button className='w-max opacity-50'>Cerrar sesión</button>
      </nav>
    </aside>
  )
}
