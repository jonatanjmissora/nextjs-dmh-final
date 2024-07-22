import { useFormContext, useWatch } from "react-hook-form";

type InputFormTypes = {
  label: string;
  placeholder: string;
  type: string;
  error: string;
};

export const InputForm = ({
  label,
  placeholder,
  type,
  error
}: InputFormTypes) => {

  const {
    register,
  } = useFormContext();

  const [hasPassword, hasPassword2] = useWatch({
    name: ['password', 'password2'],
  });

  // clases para mostrar cuando hay error,
  // y cambiar el tamaño de los puntos en el password
  const isPassword = label === 'password';
  const isPassword2 = label === 'password2';
  const inputClassHasValue = isPassword && hasPassword && 'text-7xl py-0 leading-none h-[60px] xl:h-[70px] 2xl:h-[93px]';
  const inputClassHasValue2 = isPassword2 && hasPassword2 && 'text-7xl py-0 leading-none h-[60px] xl:h-[70px] 2xl:h-[93px]';
  const inputClassHasError = error !== '' && 'outline-[3px] outline-red-700';

  return (
    <input
      className={`input-form ${inputClassHasValue} ${inputClassHasValue2} ${inputClassHasError}`}
      placeholder={placeholder}
      type={type}
      {...register(label)}
      autoComplete="on"
    />
  );
}