"use client"
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'

export default function CardLib({ cvc, expiry, name, number, focus }) {
  return (
    <Cards
      cvc={cvc}
      expiry={expiry}
      name={name}
      number={number}
      focused={focus as any}
    />
  )
}
