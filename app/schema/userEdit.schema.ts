import * as yup from 'yup';

const ERRORTEXT = {
  email: 'E-mail incorrecto. Vuelva a intentarlo',
  dni: 'DNI mínimo de 7 dígitos numéricos',
  phone: 'Telefono mínimo de 9 dígitos',
};

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const userEditSchema = yup
  .object({
    firstname: yup.string().required(requiredRes('nombre')),
    lastname: yup.string().required(requiredRes('apellido')),
    email: yup
      .string().required(requiredRes('email'))
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        ERRORTEXT.email
      ),
    phone: yup
      .string().required(requiredRes('teléfono'))
      .matches(/^\d{9,}$/, ERRORTEXT.phone),
  })
  .required();