import Link from "next/link";

export default function AccountCard() {

  const accountId = "85"

  return (
    <div className="bg-my-grey-dark text-white flex flex-col gap-2 rounded-xl py-6 px-8 sm:w-full">
      <div className="opacity-75 flex gap-4 justify-end">
        <Link className="link-border" href={`/dashboard/accounts/${accountId}/cards}`}>Ver tarjetas</Link>
        <Link className="link-border" href={`/dashboard/profile`}>Ver CVU</Link>
      </div>
      <span className="text-xl opacity-75">Dinero disponible</span>
      <span className="w-max text-3xl font-semibold border-[1px] border-primary rounded-full p-3 mx-2 my-2">$ 6.890.534,17</span>
    </div>
  )
}
