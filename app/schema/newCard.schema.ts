import * as yup from 'yup';

const requiredRes = (label: string) => {
  return `Por favor, complete ${label}`;
};

export const newCardSchema = yup
  .object({
    number: yup
      .string()
      .required(requiredRes('el número de tarjeta'))
      .matches(/^[0-9]*$/i, "Debe contener valores numéricos")
      .min(16, "Número mínimo de 16 dígitos")
      .max(16, "Número máximo de 16 dígitos"),
    name: yup
      .string().required(requiredRes('el nombre'))
      .matches(/^[a-z ,]+$/i, "Nombre con caracteres no permitidos")
      .min(3, "Nombre mínimo de 3 caracteres")
      .max(15, "Nombre máximo de 15 caracteres"),
    expiry: yup
      .string().required(requiredRes('el vencimiento'))
      .matches(/^[0-9]*$/i, "Debe contener valores numéricos")
      .min(4, "Número mínimo de 4 dígitos")
      .max(4, "Número máximo de 4 dígitos"),
    cvc: yup
      .string().required(requiredRes('el código'))
      .matches(/^[0-9]*$/i, "Debe contener valores numéricos")
      .min(3, "Número mínimo de 3 dígitos")
      .max(3, "Número máximo de 3 dígitos"),
  })
  .required();