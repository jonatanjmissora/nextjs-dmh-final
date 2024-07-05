import SVGSearch from "../assets/SVG/SVGSearch";
import { InputForm } from "./Form/InputForm";

export default function SearchBar({ placeholder }) {
  return (
    <div className="card-shadow w-full relative flex items-center">
      <SVGSearch className={"size-6 absolute left-[5%]"} />
      <InputForm className={"w-full pl-16"} label={""} placeholder={placeholder} />
    </div>
  )
}
