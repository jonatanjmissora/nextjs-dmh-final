import SearchBar from "../SearchBar";
import ActivityMainList from "./ActivityMainList";

export default function AccountActivity() {

  const activities = [
    { description: "Transferiste a Rodrigo", amount: "-1265.57", date: "Sábado" },
    { description: "Transferiste a Consorcio", amount: "-1265.57", date: "Viernes" },
    { description: "Ingresaste dinero", amount: "1265.57", date: "Viernes" },
    { description: "Te transfirieron dinero", amount: "1265.57", date: "Lunes" },
  ]

  return (
    <div className="flex flex-col gap-7 xl:gap-5">
      <SearchBar placeholder={"Buscar en tu actividad"} />
      <ActivityMainList activities={activities} />
    </div>
  )
}
