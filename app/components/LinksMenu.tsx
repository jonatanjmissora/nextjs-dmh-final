"use client"

import Link from "next/link"

export default function LinksMenu({ accountId, setShowMovilMenu }: { accountId: string, setShowMovilMenu?: React.Dispatch<React.SetStateAction<boolean>> }) {

  const LINKS = [
    { href: `/dashboard`, text: "Inicio" },
    { href: `/dashboard/accounts/${accountId}/activity`, text: "Actividad" },
    { href: `/dashboard/accounts/${accountId}`, text: "Tu perfil" },
    { href: `/dashboard/accounts/${accountId}/transferences`, text: "Cargar dinero" },
    { href: `/dashboard/accounts/${accountId}/service`, text: "Pagar Servicios" },
    { href: `/dashboard/accounts/${accountId}/cards`, text: "Tarjetas" },
  ]
  const handleClick = () => {
    if (setShowMovilMenu)
      setShowMovilMenu(prev => !prev)
  }

  return (


    <>
      {LINKS.map((link, index) =>
        <Link
          key={index}
          className=""
          href={link.href}
          onClick={handleClick}
        >
          {link.text}
        </Link>
      )}
    </>
  )
}
