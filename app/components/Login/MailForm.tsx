import { useEffect } from 'react';
import Link from 'next/link';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mailSchema } from '@/app/schema/login.schema';
import { InputForm } from '../Form/InputForm';
import { SubmitForm } from '../Form/SubmitForm';

type MailFormTypes = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMailValue: React.Dispatch<React.SetStateAction<string>>;
  loginError: string;
};

type MailType = {
  email: string;
}

export const MailForm = ({ setStep, setMailValue, loginError }: MailFormTypes) => {

  useEffect(() => {
    setFocus('email');
  }, []);

  const loginMailMethods = useForm<MailType>({
    resolver: yupResolver(mailSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setFocus,
    control,
  } = loginMailMethods;

  const onSubmit = (data: MailType) => {
    setMailValue(data.email);
    setStep(2);
  };

  const hasValue = useWatch({ control, name: "email" })

  return (
    <FormProvider {...loginMailMethods}>
      <form
        className="w-[300px] flex flex-col text-center gap-8 relative xl:gap-5 xl:w-[350px] 2xl:w-[450px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white text-center mb-3 text-[2.25rem] font-[700] xl:text-2xl">
          ¡Hola! Ingresá tu e-mail
        </p>

        <InputForm
          label="email"
          type="mail"
          placeholder="Correo electónico"
          error={errors?.email?.message || ''}
        />

        <SubmitForm text={'Continuar'} />

        <Link href={'/register'} className="button-form bg-my-grey-light">
          Crear cuenta
        </Link>
        <p id="login-mail-error" className="text-my-red-error text-2xl text-center absolute top-[110%] w-full tracking-wide xl:text-base">
          <i> {errors.email?.message || !hasValue && loginError}</i>
        </p>
      </form>
    </FormProvider>
  );
};
