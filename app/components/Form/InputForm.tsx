
type InputFormTypes = {
  label: string;
  placeholder: string;
  error?: string;
};

export const InputForm = ({
  label,
  placeholder,
  error,
}: InputFormTypes) => {

  return (
    <input
      className="input-form"
      placeholder={placeholder}
      type="text"
      autoComplete="on"
    />
  );
}