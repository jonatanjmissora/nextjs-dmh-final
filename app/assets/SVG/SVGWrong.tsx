export default function SVGWrong({ className }: { className?: string }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className={className}>
      <path d="M25 25L45 45" stroke="#E91010" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M25 45L45 25" stroke="#E91010" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="35" cy="35" r="30.5" stroke="#E91010" stroke-width="6" />
    </svg>
  )
}