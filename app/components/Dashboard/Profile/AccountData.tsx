import CopyButton from "../../CopyButton";

export default function AccountData() {

  return (
    <div className="bg-my-black card-shadow rounded-xl p-8 text-my-white font-light flex flex-col gap-6 sm:gap-20 sm:p-16 xl:p-10 xl:gap-12">
      <p className="text-xl sm:text-2xl xl:text-xl">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>
      <div className="flex flex-col gap-2 relative xl:gap-0">
        <div className="flex justify-between items-center text-primary">
          <span className="text-3xl font-medium xl:text-2xl">CVU</span>
          <CopyButton value={"CVU"} />
        </div>
        <p className="text-2xl xl:text-lg">00000021000753200000000</p>
      </div>

      <hr className="sm:hidden" />

      <div className="flex flex-col gap-2 relative xl:gap-0">
        <div className="flex justify-between items-center text-primary">
          <span className="text-3xl font-medium xl:text-2xl">Alias</span>
          <CopyButton value={"Alias"} />
        </div>
        <p className="text-2xl xl:text-lg">estealiasnoexiste</p>
      </div>

    </div>
  )
}
