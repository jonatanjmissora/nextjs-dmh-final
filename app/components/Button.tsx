export default function Button({ text, className }: { text: string, className?: string }) {
  return (
    <button className={`font-semibold tracking-wider bg-primary border border-primary px-5 py-2 rounded-md ${className}`}>{text}</button>
  )
}
