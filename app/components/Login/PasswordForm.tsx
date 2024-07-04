import Link from "next/link";
import { useRouter } from "next/navigation";

type PasswordFormTypes = {
  mailValue: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoginError: React.Dispatch<React.SetStateAction<string>>;
};

export const PasswordForm = ({ mailValue, setStep, setLoginError }: PasswordFormTypes) => {

  const router = useRouter()

  const onSubmit = async () => {
  }

  return (

    <form
      className="flex flex-col text-center gap-8 relative xl:gap-5"
      onSubmit={onSubmit}
    >
      <p className="text-white text-center mb-3 text-[2.25rem] font-[700] xl:text-2xl">
        Ingresá tu contraseña
      </p>
      <input
        className="input-form"
        type="password"
        placeholder="Contraseña"
        autoComplete='on'
      />
      <Link href={'/dashboard'} className="button-form">
        Ingresar
      </Link>

      <p id="login-mail-error" className="text-my-red-error text-2xl text-center absolute -bottom-[4.5rem] w-full tracking-wide xl:text-base xl:-bottom-[3.5rem]">
        <i> Contraseña incorrecta. Vuelve a intentarlo</i>
      </p>
    </form>
  )
}
