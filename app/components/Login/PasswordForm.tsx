import { passwordSchema } from "@/app/schema/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SubmitForm } from "../Form/SubmitForm";
import { InputForm } from "../Form/InputForm";
import { login } from "@/app/services/auth.services";

type PasswordFormTypes = {
  mailValue: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoginError: React.Dispatch<React.SetStateAction<string>>;
};

export const PasswordForm = ({ mailValue, setStep, setLoginError }: PasswordFormTypes) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginPasswordMethods = useForm<PasswordType>({
    resolver: yupResolver(passwordSchema),
  })
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setFocus,
    control,
  } = loginPasswordMethods

  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

  const onSubmit: SubmitHandler<PasswordType> = async (data) => {
    const loginData = { email: mailValue, password: data.password };
    try {
      setIsLoading(true)
      setLoginError("")
      const resp = await login(loginData)
      console.log("Recibi respuesta del swagger")
      if (resp.token) {
        router.push("/dashboard")
        router.refresh();
      }
      else throw new Error(resp.error)

    } catch (error) {
      if (error instanceof Error) {
        console.error("Error de login: ", error.message)
        setLoginError(error.message)
        setStep(1)
      }
    }
    finally {
      setIsLoading(false)
    }

  };

  return (
    <FormProvider {...loginPasswordMethods}>
      <form
        className="w-[300px] flex flex-col text-center gap-8 relative xl:gap-5 xl:w-[350px] 2xl:w-[450px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white text-center mb-3 text-[2.25rem] font-[700] xl:text-2xl">
          Ingresá tu contraseña
        </p>

        <InputForm
          label="password"
          type="password"
          placeholder="Contraseña"
          error={errors?.password?.message || ''}
        />

        <SubmitForm
          text={"Continuar"}
          isLoading={isSubmitting}
        />

        <p className="text-my-red-error text-2xl text-center absolute top-[110%] w-full tracking-wide xl:text-base">
          <i> {errors.password?.message}</i>
        </p>
      </form>
    </FormProvider>
  )
}
