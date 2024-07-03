export default function HeroText() {
  return (
    <div className="absolute left-16 top-12 w-[180px] sm:top-20 sm:w-[460px] 2xl:w-[27vw] 2xl:top-32 xl:top-30 xl:w-[30vw]">
      <p className="font-light text-white text-[1.65rem] leading-tight tracking-wide sm:text-5xl xl:leading-none 2xl:text-6xl">
        De ahora en adelante, hacés más con tu dinero
      </p>
      <div className='h-1 w-6 bg-primary mt-4 block sm:hidden xl:hidden'></div>
      <p className="text-primary font-light text-2xl leading-tight pt-5 xl:text-[4.5vh] xl:leading-none">
        Tu nueva <span className="font-[500] text-2xl xl:text-[4.5vh]">billetera virtual</span>
      </p>
    </div>
  )
}
