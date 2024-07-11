import Link from "next/link";

export default function AccountActions() {

  const accountId = "85"

  return (
    <div className="flex flex-col gap-7 xl:flex-row">
      <Link className="button-form card-shadow w-full sm:text-4xl sm:py-12 xl:text-2xl xl:py-10" href={`/dashboard/accounts/${accountId}/deposit`}>Transferir dinero</Link>
      <Link className="button-form card-shadow w-full sm:text-4xl sm:py-12 xl:text-2xl xl:py-10" href={`/dashboard/accounts/${accountId}/service`}>Pago de servicios</Link>
    </div>
  )
}
