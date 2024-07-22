import * as yup from 'yup';

const ERRORTEXT = {
  email: 'E-mail incorrecto. Vuelva a intentarlo',
  dni: 'DNI mínimo de 7 dígitos numéricos',
  phone: 'Telefono mínimo de 9 dígitos',
};

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const registerSchema = yup
  .object()
  .shape({
    firstname: yup.string().required(requiredRes('nombre')),
    lastname: yup.string().required(requiredRes('apellido')),
    dni: yup
      .string().required(requiredRes('dni'))
      .matches(/^\d{7,}$/, ERRORTEXT.dni),
    email: yup
      .string().required(requiredRes('email'))
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        ERRORTEXT.email
      ),
    password: yup
      .string().required(requiredRes('contraseña'))
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres')
      .matches(/[0-9]/, 'Contraseña con al menos un número')
      .matches(/[a-z]/, 'Contraseña con al menos una minúscula')
      .matches(/[A-Z]/, 'Contraseña con al menos una mayúscula')
      .matches(/[^\w]/, 'Contraseña con al menos un caracter especial'),
    password2: yup
      .string().required(requiredRes('confirmación'))
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
    phone: yup
      .string().required(requiredRes('teléfono'))
      .matches(/^\d{9,}$/, ERRORTEXT.phone),
  })
  .required();
