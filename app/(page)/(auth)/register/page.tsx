'use client';

import { InputForm } from "@/app/components/Form/InputForm";
import { SubmitForm } from "@/app/components/Form/SubmitForm";
import { registerSchema } from "@/app/schema/register.schema";
import { login } from "@/app/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface RegisterTypes {
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  password: string;
  password2: string;
  phone: string;
}

export default function Register() {

  const router = useRouter();

  const registerMethods = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = registerMethods;

  const [serverError, setServerError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setFocus('firstname');
  }, [setFocus]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const email = event.currentTarget.email.value;
      const password = event.currentTarget.password.value;
      setServerError(null)
      const resp = await login({ email, password })
      console.log("Recibi respuesta del swagger")
      if (resp.token) {
        router.push("/dashboard")
        router.refresh();
      }
      else throw new Error(resp.error)

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
        setServerError(error.message)
      }
    }
    finally {
      setIsLoading(false)
    }

  };

  return (
    <section className="form-container pt-[6%] sm:pt-[30%] xl:pt-[5%]">

      <FormProvider {...registerMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[300px] flex flex-col gap-4 justify-center items-center md:w-[80%] md:gap-8 xl:gap-6 xl:w-[55%]"
        >
          <h4 className="text-white text-center mb-3 text-[2.1rem] font-[700] tracking-wider xl:text-2xl">
            Crear cuenta
          </h4>

          <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
            <InputForm
              label="firstname"
              type="text"
              placeholder="Nombre*"
              error={errors?.firstname?.message || ''}
            />

            <InputForm
              label="lastname"
              type="text"
              placeholder="Apellido*"
              error={errors?.lastname?.message || ''}
            />

            <InputForm
              label="dni"
              type="text"
              placeholder="DNI*"
              error={errors?.dni?.message || ''}
            />

            <InputForm
              label="email"
              type="mail"
              placeholder="Correo electrónico*"
              error={errors?.email?.message || ''}
            />
          </div>
          <p className="text-gray-300 text-[11px] text-center w-[300px]
          sm:text-[12.5px] sm:w-max xl:text-[1rem]">
            Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
            carácter especial, una mayúscula y un número
          </p>

          <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
            <InputForm
              label="password"
              type="password"
              placeholder="Contraseña*"
              error={errors?.password2?.message || ''}
            />

            <InputForm
              label="password2"
              type="password"
              placeholder="Confirmar contraseña*"
              error={errors?.password2?.message || ''}
            />

            <InputForm
              label="phone"
              type="text"
              placeholder="Telefono*"
              error={errors?.phone?.message || ''}
            />

            <div className="relative">
              <SubmitForm text="Crear cuenta" isLoading={false} />

              <p className="text-my-red-error text-2xl text-center w-full tracking-wide pt-4 sm:absolute sm:top-[110%] sm:left-[0] sm:text-left xl:text-base ">
                <i>
                  {errors?.firstname?.message ||
                    errors?.lastname?.message ||
                    errors?.dni?.message ||
                    errors?.email?.message ||
                    errors?.password?.message ||
                    errors?.password2?.message ||
                    errors?.phone?.message ||
                    serverError}
                </i>
              </p>
            </div>


          </div>
        </form>
      </FormProvider>
    </section>
  );
}
