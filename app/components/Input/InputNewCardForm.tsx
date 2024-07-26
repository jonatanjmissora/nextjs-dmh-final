import { CardFormDataType } from "@/app/types/card.types";
import { useFormContext } from "react-hook-form";

type InputNewCardFormTypes = {
  className?: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setCardData: React.Dispatch<React.SetStateAction<CardFormDataType>>;
  error: string;
};

export const InputNewCardForm = ({
  className,
  label,
  type,
  placeholder,
  value,
  setCardData,
  error
}: InputNewCardFormTypes) => {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexNum = new RegExp(/^[0-9]*$/i);
    const regexChar = new RegExp(/^[a-z ,.'-]+$/i)

    if (event.target.name === "number") {

      if (regexNum.test(event.target.value)) {

        if (event.target.value.length > 16) return

        return setCardData(prev => ({
          ...prev,
          [event.target.name]: +event.target.value
        }))
      }
    }

    if (event.target.name === "name") {
      if (regexChar.test(event.target.value)) {

        if (event.target.value.length >= 20) return

        return setCardData(prev => ({
          ...prev,
          [event.target.name]: event.target.value
        }))
      }
    }

    if (event.target.name === "expiry") {

      if (regexNum.test(event.target.value)) {

        if (event.target.value.length > 4) return

        return setCardData(prev => ({
          ...prev,
          [event.target.name]: event.target.value
        }))
      }
    }

    if (event.target.name === "cvc") {

      if (regexNum.test(event.target.value)) {

        if (event.target.value.length > 3) return

        return setCardData(prev => ({
          ...prev,
          [event.target.name]: +event.target.value
        }))
      }
    }
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setCardData(prev => ({
      ...prev,
      focus: event.target.name
    }))
  }
  if (errors.number?.message) console.log("error de number", errors.number?.message)
  // clases para mostrar cuando hay error,
  const inputClassHasError = error !== '' && 'outline-[3px] outline-red-700';

  return (
    <input
      className={`input-form ${inputClassHasError} ${className}`}
      placeholder={placeholder}
      value={value}
      type={type}
      {...register(label)}
      onChange={handleChange}
      onFocus={handleFocus}
      autoComplete="on"
    />
  );
}
