"use client"

import { useEffect, useState } from 'react';
import CardLib from './CardLib';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CardFormDataType } from '@/app/types/card.types';
import { newCardSchema } from '@/app/schema/newCard.schema';

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

  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<CardFormDataType>({
    resolver: yupResolver(newCardSchema),
  });

  useEffect(() => {
    setFocus("number")
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value
    })
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: event.target.name
    })
  }

  const onSubmit: SubmitHandler<CardFormDataType> = async (data) => {
    toast.success("Tarjeta adherida correctamente")
    router.push(`/dashboard/accounts/${accountId}/cards`)
  }

  return (
    <div className="bg-my-white card flex flex-col items-center justify-center p-10 sm:py-20 sm:px-40 xl:py-10">
      <div className='w-full aspect-video xl:w-[300px]'>
        <CardLib cvc={cvc} expiry={expiry} name={name} number={number} focus={focus} />
      </div>

      <form className='pt-12 flex flex-col justify-center items-center gap-8 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>

        <div className='w-full flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

          <div className='w-full flex flex-col gap-8'>
            <input className='w-full input-form h-[50px] card-shadow py-0 font-light sm:text-3xl sm:py-8 xl:text-2xl xl:py-5'
              placeholder='Número de tarjeta*'
              type="text"
              value={number}
              {...register("number")}
              onChange={handleChange}
              onFocus={handleFocus}
            />

            <input className='w-full input-form h-[50px] card-shadow py-5 font-light sm:text-3xl sm:py-8  xl:text-2xl xl:py-5'
              placeholder='Nombre y apellido*'
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />
          </div>

          <div className='w-full flex flex-col gap-8 sm:flex-row sm:gap-5 xl:flex-col xl:gap-8'>
            <input className='w-full input-form h-[50px] card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:w-1/2 sm:relative sm:input-linebreak xl:w-full xl:text-2xl xl:input-nolinebreak xl:py-5'
              placeholder='Fecha de vencimiento*'
              id="expiry"
              value={expiry}
              name="expiry"
              onChange={handleChange}
              onFocus={handleFocus}
              required
              type="text"
            />

            <input className='w-full input-form h-[50px] card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:w-1/2 sm:relative sm:input-linebreak  xl:w-full xl:text-2xl xl:input-nolinebreak xl:py-5'
              placeholder='Código de seguridad*'
              type="text"
              id="cvc"
              value={cvc}
              name="cvc"
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />
          </div>

        </div>

        <div className='w-full flex xl:gap-20'>
          <div className='flex-1'>.</div>
          <button className='w-full xl:flex-1 button-form card-shadow' type="submit" >Continuar</button>

        </div>
        <p><i>
          hola manola
          {errors?.number?.message}
        </i></p>


      </form>
    </div>
  )
}