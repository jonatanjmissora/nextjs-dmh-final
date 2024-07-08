export default function HomeContent() {
  return (
    <>
      <div className="h-[43%] bg-primary absolute left-0 right-0 bottom-0 rounded-t-[40px] xl:h-[22%] sm:h-[40%]"></div>
      <div className="flex flex-col justify-center items-center gap-6 absolute bottom-8 left-0 w-screen sm:bottom-20 sm:gap-10 xl:flex-row xl:bottom-7 xl:gap-4">
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
    <article className="self-center w-[94%] p-9 rounded-[30px] bg-white
    sm:w-[650px] sm:p-12
    xl:self-stretch xl:w-[37vw] xl:p-8">
      <p className="text-[2.75rem] tracking-wide font-bold border-b-2 border-primary pb-2
      sm:text-[4rem]
      xl:text-[2.75vw]">
        {title}
      </p>
      <p className="text-2xl tracking-wide leading-snug pt-3
      sm:text-[2.09rem]
      xl:text-[1.5vw] xl:leading-tight">{content}</p>
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
