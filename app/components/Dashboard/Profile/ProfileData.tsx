import SVGEdit from "@/app/assets/SVG/SVGEdit"
import Link from "next/link"

export default function ProfileData() {

  const accountId = "85"

  const accountData = {
    email: "mauriciobrito@digitalhouse.com",
    name: "Mauricio Brito",
    cuit: "20350267998",
    phone: "1146730989",
    password: "*******",
  }

  return (
    <div className="card bg-my-white p-8 py-10 xl:py-8">
      <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 sm:text-4xl sm:border-b-0 xl:text-2xl">Tus datos</h2>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Email</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span>{accountData.email}</span>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Nombre y apellido</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span>{accountData.name}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-600" />
          </Link>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">CUIT</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span>{accountData.cuit}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-600" />
          </Link>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Teléfono</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span>{accountData.phone}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-600" />
          </Link>
        </div>
      </div>

      <div className="text-2xl flex flex-wrap justify-between border-b-[1px] border-gray-200 py-2  sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-1/3">Contraseña</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span>{accountData.password}</span>
          <Link href={`/dashboard/accounts/${accountId}/userEdit`}>
            <SVGEdit className="size-8 text-gray-600" />
          </Link>
        </div>
      </div>

    </div >
  )
}
