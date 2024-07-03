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
    <article className="self-center xl:self-stretch w-[90%] xl:w-[37vw] sm:w-[630px] xl:p-6 sm:p-8 p-4 py-5 rounded-[30px] bg-white">
      <p className="text-3xl xl:text-[2.5vw] sm:text-[2.6rem] font-bold border-b-2 border-primary pb-2">
        {title}
      </p>
      <p className="tracking-wide text-sm xl:text-[1.5vw] sm:text-xl leading-snug pt-3">{content}</p>
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
