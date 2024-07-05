import Link from "next/link";

export default function AccountActions() {

  const accountId = "85"

  return (
    <div className="flex flex-col gap-7">
      <Link className="button-form card-shadow w-full" href={`/dashboard/accounts/${accountId}/deposit`}>Transferir dinero</Link>
      <Link className="button-form card-shadow w-full" href={`/dashboard/accounts/${accountId}/services`}>Pago de servicios</Link>
    </div>
  )
}
