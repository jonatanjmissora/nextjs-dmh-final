import Link from 'next/link'
import React from 'react'

export default function DashboardMenu() {
  return (
    <aside className='hidden sm:block sm:w-[26%] sm:bg-primary sm:px-14 sm:py-20'>
      <nav className='text-3xl flex flex-col gap-6'>
        <Link className='' href={`/dashboard`}>Inicio</Link>
        <Link className='' href={`/dashboard`}>Actividad</Link>
        <Link className='' href={`/dashboard`}>Tu perfil</Link>
        <Link className='' href={`/dashboard`}>Cargar dinero</Link>
        <Link className='' href={`/dashboard`}>Pagar Servicios</Link>
        <Link className='' href={`/dashboard`}>Tarjetas</Link>
        <button className='w-max opacity-50'>Cerrar sesión</button>
      </nav>
    </aside>
  )
}
