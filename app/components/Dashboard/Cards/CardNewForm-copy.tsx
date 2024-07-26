"use client"

import { useEffect, useState } from 'react';
import CardLib from './CardLib';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitForm } from '../../Button/SubmitForm';
import { InputNewCardForm } from '../../Input/InputNewCardForm';
import * as yup from 'yup';
import { InputForm } from '../../Input/InputForm';

export type CardFormDataType = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus?: string;
}

const ERRORTEXT = {
  number: 'Tarjeta mínimo de 16 dígitos',
  expiry: 'Código de 4 dígitos',
  cvc: 'Código de 3 dígitos',
};

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

const initialState = {
  number: "",
  name: "",
  expiry: "",
  cvc: "",
  focus: "number",
}

export default function CardNewForm({ accountId }: { accountId: string }) {

  const router = useRouter()
  const [cardData, setCardData] = useState<CardFormDataType>(initialState);
  const { number, name, expiry, cvc, focus } = cardData

  const newCardFormMethods = useForm<CardFormDataType>({
    resolver: yupResolver(newCardSchema),
  });
  const {
    handleSubmit,
    setFocus,
    control,
    formState: { errors, isSubmitting },
  } = newCardFormMethods

  useEffect(() => {
    setFocus("number")
  }, [])

  const onSubmit: SubmitHandler<CardFormDataType> = async (data) => {
    console.log({ data })
    console.log({ cardData })
    toast.success("Tarjeta adherida correctamente")
    router.push(`/dashboard/accounts/${accountId}/cards`)
  }

  const hasNumber = useWatch({ control, name: "number" })
  console.log({ hasNumber })

  return (
    <div className="bg-my-white card flex flex-col items-center justify-center p-10 sm:py-20 sm:px-40 xl:py-10">
      <div className='w-full aspect-video xl:w-[300px]'>
        <CardLib
          number={number === "" ? 0 : +number}
          name={name}
          expiry={expiry}
          cvc={cvc === "" ? 0 : +cvc}
          focus={focus}
        />
      </div>
      <FormProvider {...newCardFormMethods}>
        <form className='pt-12 flex flex-col justify-center items-center gap-8 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>

          <div className='w-full flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

            <div className='w-full flex flex-col gap-8'>
              {/*
              <InputForm
                label={'number'}
                placeholder={'Numero de tarjeta'}
                type={'text'}
                error={errors?.number?.message || ''} />
                */}
              <InputNewCardForm
                className='w-full input-form h-[50px] card-shadow py-5 font-light sm:text-3xl sm:py-8  xl:text-2xl xl:py-5'
                label="number"
                type="text"
                placeholder='Número de tarjeta*'
                value={number}
                setCardData={setCardData}
                error={errors?.number?.message || ''}
              />

              <InputNewCardForm
                className='w-full input-form h-[50px] card-shadow py-5 font-light sm:text-3xl sm:py-8  xl:text-2xl xl:py-5'
                label="name"
                type="text"
                placeholder='Nombre y apellido*'
                value={name}
                setCardData={setCardData}
                error={errors.name?.message || ''}
              />

            </div>

            <div className='w-full flex flex-col gap-8 sm:flex-row sm:gap-5 xl:flex-col xl:gap-8'>
              <InputNewCardForm
                className='w-full h-[50px] input-nolinebr card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:h-[70px] sm:input-linebr xl:text-2xl xl:py-5'
                label="expiry"
                type="text"
                placeholder='Fecha de vencimiento*'
                value={expiry}
                setCardData={setCardData}
                error={errors.expiry?.message || ''}
              />

              <InputNewCardForm
                className='w-full h-[50px] input-nolinebr card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:h-[70px] sm:input-linebr xl:text-2xl xl:py-5'
                label="cvc"
                type="text"
                placeholder='Código de seguridad*'
                value={cvc}
                setCardData={setCardData}
                error={errors.cvc?.message || ''}
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