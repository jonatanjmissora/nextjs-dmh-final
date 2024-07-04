import { useEffect } from 'react';
import Link from 'next/link';

type MailFormTypes = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMailValue: React.Dispatch<React.SetStateAction<string>>;
  loginError: string;
};

export const MailForm = ({ setStep, setMailValue, loginError }: MailFormTypes) => {
  useEffect(() => {
  }, []);

  const onSubmit = () => {
    setMailValue("");
    setStep(2);
  };

  return (
    <form
      className="flex flex-col text-center gap-8 relative xl:gap-5"
      onSubmit={onSubmit}
    >
      <p className="text-white text-center mb-3 text-[2.25rem] font-[700] xl:text-2xl">
        ¡Hola! Ingresá tu e-mail
      </p>

      <input
        className="input-form"
        placeholder="Correo electónico"
      />

      <button className='button-form'>Continuar</button>

      <Link href={'/register'} className="button-form bg-my-grey-light">
        Crear cuenta
      </Link>

      <p id="login-mail-error" className="text-my-red-error text-2xl text-center absolute -bottom-[4.5rem] w-full tracking-wide xl:text-base xl:-bottom-[3.5rem]">
        <i> Usuaruio inexistente. Vuelve a intentarlo</i>
      </p>
    </form>
  );
};
