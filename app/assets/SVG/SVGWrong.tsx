export default function SVGWrong({ className }: { className?: string }) {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" className={className}>
      <path d="M23 23L42 42" stroke="#E91010" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M23 42L42 23" stroke="#E91010" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="32.5" cy="32.5" r="30.5" stroke="#E91010" stroke-width="4" />
    </svg>
  )
}