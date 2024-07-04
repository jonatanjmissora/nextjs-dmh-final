export default function HomeContent() {
  return (
    <>
      <div className="xl:h-[22%] sm:h-[40%] h-[45%] bg-primary absolute left-0 right-0 bottom-0 rounded-t-[40px]"></div>
      <div className="flex xl:flex-row flex-col justify-center items-center lg:gap-3 gap-6 absolute xl:bottom-7 bottom-12 left-0 w-screen">
        <HeroCard
          title={CARDTEXT.card1.title}
          content={CARDTEXT.card1.content}
        />
        <HeroCard
          title={CARDTEXT.card2.title}
          content={CARDTEXT.card2.content}
        />
      </div>
    </>
  )
}

export const HeroCard = ({ title, content }: { title: string, content: string }) => {
  return (
    <article className="self-center w-[90%] p-4 py-5 rounded-[30px] bg-white
    sm:w-[630px] sm:p-8
    xl:self-stretch xl:w-[37vw] xl:p-12">
      <p className="text-3xl font-bold border-b-2 border-primary pb-2
      sm:text-[2.6rem] 
      xl:text-[2.2vw]">
        {title}
      </p>
      <p className="tracking-wide text-sm leading-snug pt-3
      sm:text-xl
      xl:text-[1.5vw]  ">{content}</p>
    </article>
  );
};

export const CARDTEXT = {
  card1: {
    title: 'Transferí dinero',
    content:
      'Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra  billetera virtual',
  },
  card2: {
    title: 'Pago de servicios',
    content:
      'Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel',
  },
};
