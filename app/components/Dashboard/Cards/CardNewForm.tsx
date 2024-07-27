"use client"

import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import CardLib from "./CardLib";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../../Input/InputForm";
import { SubmitForm } from "../../Button/SubmitForm";
import { useEffect, useState } from "react";
import { newCardSchema } from "@/app/schema/newCard.schema";

export type CardFormDataType = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus?: string;
}

export default function CardNewForm() {

  const newCardFormMethods = useForm<CardFormDataType>({
    resolver: yupResolver(newCardSchema),
  });

  const {
    handleSubmit,
    setFocus,
    control,
    formState: { errors, isSubmitting },
  } = newCardFormMethods


  const [actualFocus, setActualFocus] = useState<string>("number")
  useEffect(() => {
    setFocus("number")
  }, [])

  const onSubmit: SubmitHandler<CardFormDataType> = (data) => {
    console.log({ data })
  }

  const [
    cardLibNumber, 
    cardLibName,
    cardLibExpiry,
    cardLibCvc,
  ] = useWatch({control, 
    name: ["number", "name", "expiry", "cvc"]})

  return (
    <div className="bg-my-white card flex flex-col items-center justify-center p-10 sm:py-20 sm:px-40 xl:py-10"> 
      <div className='w-full aspect-video xl:w-[300px]'>
        <CardLib
          number={+cardLibNumber || NaN}
          name={cardLibName || ""}
          expiry={cardLibExpiry || ""}
          cvc={+cardLibCvc || NaN}
          focus={actualFocus}
        />
      </div>
      <FormProvider {...newCardFormMethods} >
        <form className='pt-12 flex flex-col justify-center items-center gap-8 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>

          <div className='w-full flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

            <div className='w-full flex flex-col gap-8'>
              <InputForm
                className="card"
                label={"number"}
                placeholder={"Número de tarjeta"}
                type={"string"}
                setActualFocus={setActualFocus}
                error={errors.number?.message || ""}
              />

              <InputForm
                className="card"
                label={"name"}
                placeholder={"Nombre del titular"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.name?.message || ""}
              />
            </div>

            <div className='w-full flex flex-col gap-8 sm:flex-row sm:gap-5 xl:flex-col xl:gap-8'>
              <InputForm
                className="card input-nolinebreak sm:input-linebreak xl:input-nolinebreak"
                label={"expiry"}
                placeholder={"Fecha de expiración"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.expiry?.message || ""}
              />

              <InputForm
                className="card input-nolinebreak sm:input-linebreak xl:input-nolinebreak"
                label={"cvc"}
                placeholder={"Código de seguridad"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.cvc?.message || ""}
              />
            </div>

          </div>

          <div className='w-full flex xl:gap-20'>
            <div className='hidden xl:flex xl:flex-1'></div>
            <SubmitForm className="flex-1" text={"Continuar"} isLoading={isSubmitting} />
          </div>

          <p className='text-xl font-bold'><i>
            {
              errors?.number?.message ||
              errors?.name?.message ||
              errors?.expiry?.message ||
              errors?.cvc?.message
            }

          </i></p>
        </form>
      </FormProvider>
    </div>
  )
}
