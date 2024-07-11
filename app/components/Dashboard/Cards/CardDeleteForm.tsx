"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function CardDeleteForm() {

  const router = useRouter()
  const accountId = "85"

  const submit = async () => {
    toast.success("Tarjeta eliminada")
    router.push(`/dashboard/accounts/${accountId}/cards`)
  }

  return (
    <form className="w-1/2" action={submit}>
      <button className="button-form card-shadow w-full">Eliminar</button>
    </form>
  )
}
