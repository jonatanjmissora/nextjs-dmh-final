
export default function InputSearch({ className, placeholder }: { className: string, placeholder: string }) {
  return (
    <input
      className={`input-form ${className}`}
      placeholder={placeholder}
      type="text"
      autoComplete="on"
    />
  )
}
