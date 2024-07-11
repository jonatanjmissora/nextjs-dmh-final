
type InputFormTypes = {
  label?: string;
  name?: string;
  placeholder: string;
  error?: string;
  className?: string;
};

export const InputForm = ({
  label,
  name,
  placeholder,
  error,
  className,
}: InputFormTypes) => {

  return (
    <input
      className={`input-form ${className}`}
      name={name}
      placeholder={placeholder}
      type="text"
      autoComplete="on"
    />
  );
}