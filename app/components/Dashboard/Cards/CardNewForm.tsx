"use client"

import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { SubmitForm } from '../../Form/SubmitForm';
import { InputForm } from '../../Form/InputForm';
import Link from 'next/link';

type CardDataType = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: string;
}

const initialState = {
  number: "",
  name: "",
  expiry: "",
  cvc: "",
  focus: "",
}

export default function CardNewForm() {

  const accountId = "85"

  const [cardData, setCardData] = useState<CardDataType>(initialState);
  const { number, name, expiry, cvc, focus } = cardData

  const handleChange = () => {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value
    })
  }

  const handleFocus = () => {
    setCardData({
      ...cardData,
      focus: event.target.name
    })
  }

  const handleSubmit = () => {
    event?.preventDefault()

  }

  return (
    <div className="bg-my-white card-shadow rounded-xl py-10 sm:py-20 xl:py-10">
      <Cards
        cvc={cvc}
        expiry={expiry}
        name={name}
        number={number}
        focused={focus as any}
      />

      <form className='pt-12 flex flex-col justify-center items-center gap-8 w-[80%] mx-auto sm:w-[70%] xl:w-[80%]' onSubmit={handleSubmit}>

        <div className='flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

          <div className='w-full flex flex-col gap-8'>
            <input className='w-full input-form card-shadow py-5 font-light sm:text-3xl sm:py-8 xl:text-2xl xl:py-5'
              placeholder='Número de tarjeta*'
              type="text"
              id="number"
              value={number}
              name="number"
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />

            <input className='w-full input-form card-shadow py-5 font-light sm:text-3xl sm:py-8  xl:text-2xl xl:py-5'
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
            <input className='w-full input-form card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:w-1/2 sm:relative sm:input-linebreak xl:w-full xl:text-2xl xl:input-nolinebreak xl:py-5'
              placeholder='Fecha de vencimiento*'
              id="expiry"
              value={expiry}
              name="expiry"
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />

            <input className='w-full input-form card-shadow py-5 font-light sm:text-3xl sm:py-8 sm:w-1/2 sm:relative sm:input-linebreak  xl:w-full xl:text-2xl xl:input-nolinebreak xl:py-5'
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
            <Link className='w-full xl:flex-1 button-form card-shadow' href={`/dashboard/accounts/${accountId}/cards`} >Continuar</Link>
           
          </div>
        

      </form>
    </div>
  )
}