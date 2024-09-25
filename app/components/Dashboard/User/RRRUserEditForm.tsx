"use client"
import Link from "next/link"
import { InputForm } from "../../Input/InputForm"
import { SubmitForm } from "../../Button/SubmitForm"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { UserDataTypes, UserEditDataTypes } from "@/app/types/user.types"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { userEditSchema } from "@/app/schema/userEdit.schema"
import { updateUserCookies, userEdit } from "@/app/services/user.services"

export default function UserEditForm({ accountId, user, token }: { accountId: string, user: UserDataTypes, token: string }) {

  const router = useRouter()
  const [userEditError, setUserEditError] = useState<string>("")

  const userEditMethods = useForm<UserEditDataTypes>({
    resolver: yupResolver(userEditSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = userEditMethods

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<UserEditDataTypes> = async (data) => {
    const userEditData = { ...data, id: user.id, dni: user.dni };
    try {
      setUserEditError("")
      const resp = await userEdit(user.id.toString(), userEditData, token)
      //console.log("Respuesta del swagger", { resp })
      if (resp.error) {
        throw new Error(resp.error)
      }

      if (user.firstname !== resp.firstname || user.lastname !== resp.lastname) {
        updateUserCookies(resp)
      }
      router.replace(`/dashboard/accounts/${accountId}`)
      router.refresh();
      toast.success("Usuario editado")

    } catch (error) {
      if (error instanceof Error) {
        console.error("Error de login: ", error.message)
        setUserEditError(error.message)
      }
    }
  };

  return (
    <FormProvider {...userEditMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col gap-6 px-6 sm:px-0 sm:w-8/12 sm:mx-auto xl:w-10/12 xl:flex-row'>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-2xl xl:text-xl">email</span>
            <InputForm
              label={"email"}
              placeholder={"Email*"}
              type="text"
              defaultValue={user.email}
              error={errors?.email?.message || ''}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl xl:text-xl" htmlFor="firstname">nombre</label>
            <InputForm
              label={"firstname"}
              placeholder={"Nombre*"}
              type="text"
              defaultValue={`${user.firstname}`}
              error={errors?.firstname?.message || ''}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl xl:text-xl" htmlFor="lastname">nombre</label>
            <InputForm
              label={"lastname"}
              placeholder={"Apellido*"}
              type="text"
              defaultValue={`${user.lastname}`}
              error={errors?.lastname?.message || ''}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-2xl xl:text-xl" htmlFor="">dni</label>
            <span className="input-form">{user.dni}</span>
          </div>

          <div className="flex flex-col">
            <label className="text-2xl xl:text-xl" htmlFor="phone">teléfono</label>
            <InputForm
              label={"phone"}
              placeholder={"telefono"}
              type="text"
              defaultValue={user.phone}
              error={errors?.phone?.message || ''}
            />
          </div>

          <div className='flex flex-col gap-6 mt-6 sm:flex-row xl:mt-auto'>
            <SubmitForm className="card-shadow" text={"Guardar"} isLoading={isSubmitting} />
            <Link href={`/dashboard/accounts/${accountId}`} className='button-form bg-gray-400 card-shadow'>Cancelar</Link>
          </div>
        </div>

        <p className="text-my-red-error text-2xl text-center absolute top-[105%] w-full tracking-wide xl:text-base">
          <i>
            {errors?.firstname?.message ||
              errors?.lastname?.message ||
              errors?.email?.message ||
              errors?.phone?.message ||
              userEditError}
          </i>
        </p>

      </form>
    </FormProvider>
  )
}
