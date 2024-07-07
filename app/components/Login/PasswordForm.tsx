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
      className="w-[300px] flex flex-col text-center gap-8 relative xl:gap-5 xl:w-[350px] 2xl:w-[450px]"
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

      <p id="login-mail-error" className="text-my-red-error text-2xl text-center absolute top-[110%] w-full tracking-wide xl:text-base">
        <i> Contraseña incorrecta. Vuelve a intentarlo</i>
      </p>
    </form>
  )
}
