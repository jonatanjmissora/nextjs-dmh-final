import * as yup from 'yup';

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
      .string().required(requiredRes('el número de tarjeta'))
      .matches(/^\d{16,16}$/, ERRORTEXT.number),
    name: yup
      .string().required(requiredRes('el nombre')),
    expiry: yup
      .string().required(requiredRes('el vencimiento'))
      .matches(/^\d{4,4}$/, ERRORTEXT.expiry),
    cvc: yup
      .string().required(requiredRes('el código'))
      .matches(/^\d{3,3}$/, ERRORTEXT.cvc),
  })
  .required();