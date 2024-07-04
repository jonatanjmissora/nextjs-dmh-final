export default function Footer() {
  return (
    <footer className="text-[14px] bg-my-grey-medium flex justify-center items-center px-8 text-primary h-[64px] sm:justify-start">
      © {new Date().getFullYear()} Digital Money House
    </footer>
  )
}
