"use client"

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CardLib from "./CardLib";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { InputForm } from "../../Input/InputForm";
import { SubmitForm } from "../../Button/SubmitForm";

export type CardFormDataType = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus?: string;
}

const requiredRes = (label: string) => {
  return `Por favor, complete ${label}`;
};

export const newCardSchema = yup
  .object({
    number: yup
      .string().required(requiredRes('el número de tarjeta')),
    name: yup
      .string().required(requiredRes('el nombre')),
    expiry: yup
      .string().required(requiredRes('el vencimiento')),
    cvc: yup
      .string().required(requiredRes('el código')),
  })
  .required();

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

  const onSubmit: SubmitHandler<CardFormDataType> = (data) => {
    console.log({ data })
  }

  return (
    <div className="bg-my-white card flex flex-col items-center justify-center p-10 sm:py-20 sm:px-40 xl:py-10">
      <div className='w-full aspect-video xl:w-[300px]'>
        <CardLib
          number={0}
          name={""}
          expiry={""}
          cvc={0}
          focus={"number"}
        />
      </div>
      <FormProvider {...newCardFormMethods} >
        <form className='pt-12 flex flex-col justify-center items-center gap-8 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>

          <div className='w-full flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

            <div className='w-full flex flex-col gap-8'>
              <InputForm
                label={"number"}
                placeholder={"Número de tarjeta"}
                type={"text"}
                error={errors.number?.message || ""}
              />

              <InputForm
                label={"name"}
                placeholder={"Nombre del titular"}
                type={"text"}
                error={errors.name?.message || ""}
              />
            </div>

            <div className='w-full flex flex-col gap-8 sm:flex-row sm:gap-5 xl:flex-col xl:gap-8'>
              <InputForm
                label={"expiry"}
                placeholder={"Fecha de expiración"}
                type={"text"}
                error={errors.expiry?.message || ""}
              />

              <InputForm
                label={"cvc"}
                placeholder={"Código de seguridad"}
                type={"text"}
                error={errors.cvc?.message || ""}
              />
            </div>

          </div>

          <div className='w-full flex xl:gap-20'>
            <div className='flex-1'></div>
            <SubmitForm text={"Continuar"} isLoading={isSubmitting} />
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
