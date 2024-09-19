"use client"

import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGEdit from "@/app/assets/SVG/SVGEdit";
import SVGPlus from "@/app/assets/SVG/SVGPlus";
import SVGSpinner from "@/app/assets/SVG/SVGSpinner";
import { userEditSchema } from "@/app/schema/userEdit.schema";
import { UserEditDataTypes } from "@/app/types/user.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { InputForm } from "../../Input/InputForm";

type ProfileEditFieldProps = {
  fieldLabel: string;
  fieldValue: string;
  editing: string;
  setEditing: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileEditField({ fieldLabel, fieldValue, editing, setEditing }: ProfileEditFieldProps) {

  const [showEdit, setShowEdit] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const userEditMethods = useForm<UserEditDataTypes>({
    resolver: yupResolver(userEditSchema),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = userEditMethods

  useEffect(() => {
    editing === fieldLabel
      ? setShowEdit(true)
      : setShowEdit(false)

    if (showEdit && inputRef.current)
      inputRef.current.select()

  }, [editing, fieldLabel, showEdit])

  const handleEdit = () => {
    setEditing(fieldLabel)
    setShowEdit(true)
  }

  const onSubmit: SubmitHandler<UserEditDataTypes> = async (data) => {
    console.log("DDDD")
    try {
      setTimeout(() => {
        alert(editing)
        setShowEdit(false)
        setEditing("")
      }, 3000)

    } catch (error) {

    }
    setShowEdit(false)
    setEditing("")

  }

  const handleCancel = () => {
    setShowEdit(false)
    setEditing("")
  }

  return (
    <div className="text-2xl flex flex-wrap justify-between items-center border-b-[1px] border-gray-200 h-20 sm:flex-row sm:justify-between xl:text-xl">
      <span className="w-full sm:w-3/12">{fieldLabel}</span>
      {showEdit
        ? (
          <FormProvider {...userEditMethods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex justify-between items-center text-gray-600">

              <InputForm
                label={"email"}
                placeholder={"Email*"}
                type="text"
                defaultValue={fieldValue}
                error={errors?.email?.message || ''}
              />

              {isSubmitting
                ? (<SVGSpinner className="size-8 mx-12 text-primary" />)
                : (
                  <div className="ml-8 justify-between items-center gap-2">

                    {/*
                    <SubmitForm className="card-shadow" text={"Guardar"} isLoading={isSubmitting} />
                    */}
                    <button className="" type="submit">
                      <SVGCheck className="size-10 text-green-700" />
                    </button>
                    <button className="ml-2" type="button" onClick={handleCancel}>
                      <SVGPlus className="size-10 rotate-45 text-red-700" />
                    </button>
                  </div>
                )
              }

            </form>

            <p className="text-my-red-error text-2xl text-center">
              <i>
                {errors?.firstname?.message ||
                  errors?.lastname?.message ||
                  errors?.email?.message ||
                  errors?.phone?.message}
              </i>
            </p>

          </FormProvider>
        )
        : (
          <div className="flex-1 flex justify-between text-gray-600">
            <span className="text-gray-400 border border-transparent">{fieldValue}</span>
            <button onClick={handleEdit}>
              <SVGEdit className="size-8 text-gray-400" />
            </button>
          </div>
        )
      }

    </div>
  )
}
