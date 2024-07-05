'use client';

import { InputForm } from "@/app/components/Form/InputForm";
import { SubmitForm } from "@/app/components/Form/SubmitForm";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const onSubmit = async () => {
    event?.preventDefault()
    router.push("/login")
  };

  return (
    <section className="form-container pt-12 sm:pt-[30%] xl:pt-[5%]">

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 justify-center items-center min-h-[380px] md:gap-8 xl:gap-6"
      >
        <h4 className="text-white text-center mb-3 text-[2.1rem] font-[700] tracking-wider xl:text-2xl">
          Crear cuenta
        </h4>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
          <InputForm
            label="firstname"
            placeholder="Nombre*"
            error={''}
          />

          <InputForm
            label="lastname"
            placeholder="Apellido*"
            error={''}
          />

          <InputForm
            label="dni"
            placeholder="DNI*"
            error={''}
          />

          <InputForm
            label="email"
            placeholder="Correo electrónico*"
            error={''}
          />
        </div>
        <p className="text-white opacity-75 text-[12px] text-center w-[300px]
        sm:text-[12.5px] sm:w-max xl:text-[1rem]">
          Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
          carácter especial, una mayúscula y un número
        </p>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
          <InputForm
            label="password"
            placeholder="Contraseña*"
            error={''}
          />

          <InputForm
            label="password2"
            placeholder="Confirmar contraseña*"
            error={''}
          />

          <InputForm
            label="phone"
            placeholder="Telefono*"
            error={''}
          />

          <SubmitForm text="Crear cuenta" isLoading={false} />

          <div className="hidden sm:block"></div>
          <p id="login-mail-error" className="text-my-red-error text-2xl text-center w-full tracking-wide xl:text-base xl:-bottom-[3.5rem]">
            <i> Completa los campos requeridos</i>
          </p>
        </div>
      </form>
    </section>
  );
}
