"use client"

import SVGEdit2 from "@/app/assets/SVG/SVGEdit2";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TransferencesCheckout() {

  const router = useRouter()

  const accountId = "85"

  const onSubmit = () => {
    event?.preventDefault()
    router.push(`/dashboard/accounts/${accountId}/deposits/success`)
  }

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>

      <div className="relative flex flex-col gap-12 text-white bg-my-black rounded-xl p-12 sm:py-12 xl:py-12 xl:gap-6 xl:pb-20">

        <h2 className="text-3xl text-primary font-bold sm:px-10 xl:text-2xl">Revisá que está todo bien</h2>

        <hr className="text-gray-600 sm:hidden" />

        <div className="flex flex-col gap-2 sm:px-10">
          <div className="flex items-center gap-6">
            <span className="text-2xl opacity-75 xl:text-xl">Vas a transferir</span>
            <Link href={`/dashboard/accounts/${accountId}/deposits/amount`}>
              <SVGEdit2 />
            </Link>
          </div>
          <span className="text-2xl font-bold xl:text-xl">$300</span>
        </div>

        <div className="flex flex-col gap-2 sm:px-10">
          <p className="text-xl opacity-75 xl:text-base">Para</p>
          <p className="text-3xl font-bold xl:text-2xl">Cuenta propia</p>
        </div>

        <div className="opacity-75 flex flex-col gap-2 sm:px-10">
          <p className="text-xl">Brubank</p>
          <p className="text-base">CVU 00000021000759900000000</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full flex justify-end absolute -bottom-[7rem] right-0 sm:relative sm:bottom-0 xl:absolute xl:right-12 xl:bottom-8"
        >
          <button className="button-form card-shadow text-black w-1/2 sm:w-full xl:w-3/12" >Transferir</button>
        </form>
      </div>
    </article>
  )
}
