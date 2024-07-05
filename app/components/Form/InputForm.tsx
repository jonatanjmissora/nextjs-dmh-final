
type InputFormTypes = {
  label: string;
  placeholder: string;
  error?: string;
  className?: string;
};

export const InputForm = ({
  label,
  placeholder,
  error,
  className,
}: InputFormTypes) => {

  return (
    <input
      className={`input-form ${className}`}
      placeholder={placeholder}
      type="text"
      autoComplete="on"
    />
  );
}