export default function Button({ text, className }: { text: string, className?: string }) {
  return (
    <button className={`text-[1.5rem] sm:text-[16px] font-semibold tracking-wider bg-primary border border-primary px-7 py-3 rounded-md xl:px-5 xl:py-2 ${className}`}>{text}</button>
  )
}
