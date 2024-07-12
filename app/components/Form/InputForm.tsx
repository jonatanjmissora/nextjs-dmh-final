
type InputFormTypes = {
  className?: string;
  label?: string;
  id?: string;
  name?: string;
  placeholder: string;
  type?: string;
  defaultValue: string;
  error?: string;
};

export const InputForm = ({
  className,
  id,
  label,
  name,
  placeholder,
  type,
  defaultValue,
  error,
}: InputFormTypes) => {

  return (
    <input
      className={`input-form ${className}`}
      name={name}
      placeholder={placeholder}
      type={type || "submit"}
      autoComplete="on"
      required
      defaultValue={defaultValue || ""}
    />
  );
}