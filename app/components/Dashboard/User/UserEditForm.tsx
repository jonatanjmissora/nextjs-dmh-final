"use client"
import Link from "next/link"
import { InputForm } from "../../Form/InputForm"
import { SubmitForm } from "../../Form/SubmitForm"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function UserEditForm() {

  const accountId = "85"
  const router = useRouter()

  const userData = {
    email: "jonatanjmissora@gmail.com",
    firstname: "jonatan",
    lastname: "missora",
    dni: 11111111,
    phone: "29155467",
  }

  const handleSubmit = () => {
    event?.preventDefault()
    router.replace(`/dashboard/accounts/${accountId}`)
    toast.success("Usuario editado")
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 px-6 sm:px-0 sm:w-8/12 sm:mx-auto xl:w-1/2'>

      <div className="flex flex-col">
        <label className="text-2xl xl:text-xl" htmlFor="email">email</label>
        <InputForm className="py-4 card-shadow text-lg" id="email" placeholder={"email"} name="email" type="text" defaultValue={userData.email} />
      </div>

      <div className="flex flex-col">
        <label className="text-2xl xl:text-xl" htmlFor="username">nombre</label>
        <InputForm className="py-4 card-shadow text-lg" id="username" placeholder={"nombre"} name="username" type="text" defaultValue={`${userData.firstname}, ${userData.lastname}`} />
      </div>

      <div className="flex flex-col">
        <label className="text-2xl xl:text-xl" htmlFor="">dni</label>
        <span className="text-2xl p-4 bg-my-white rounded-xl xl:text-lg">{userData.dni}</span>
      </div>

      <div className="flex flex-col">
        <label className="text-2xl xl:text-xl" htmlFor="phone">teléfono</label>
        <InputForm className="py-4 card-shadow text-lg" id="phone" placeholder={"telefono"} name="phone" type="text" defaultValue={userData.phone} />
      </div>

      <div className='flex flex-col gap-6 mt-6 sm:flex-row'>
        <SubmitForm className="card-shadow" text={"Guardar"} />
        <Link href={`/dashboard/accounts/${accountId}`} className='button-form bg-gray-400 card-shadow'>Cancelar</Link>
      </div>
    </form>
  )
}
