"use client"
import SVGCheckbox from "@/app/assets/SVG/SVGCheckbox";
import SVGCheckboxFill from "@/app/assets/SVG/SVGCheckboxFill";
import SVGChevronDown from "@/app/assets/SVG/SVGChevronDown";
import SVGChevronRight from "@/app/assets/SVG/SVGChevronRight";
import SVGFilter from "@/app/assets/SVG/SVGFilter";

export default function ActivityFilter() {

  const handleClick = (value: string) => {

  }

  const actualOption = 6

  const filterOptions = [
    { id: 1, name: "Hoy" },
    { id: 2, name: "Ayer" },
    { id: 3, name: "Última semana" },
    { id: 4, name: "Últimos 15 días" },
    { id: 5, name: "Último mes" },
    { id: 6, name: "Último año" },
  ]

  return (
    <details
      // ref={detailRef}
      className='relative p4'
    >
      <summary className='list-none flex justify-between items-center gap-6'>
        <span className="text-2xl font-medium link-border sm:after:w-0 sm:text-3xl xl:text-xl">Filtrar</span>
        <SVGFilter className={"text-primary"} />
      </summary>

      <div className="bg-white absolute z-10 top-[200%]  -right-[20%] sm:-right-[50%] sm:top-[230%] card-shadow w-[350%] xl:w-[300%] xl:-right-[40%]">
        <div className="flex justify-between items-center gap-20 border-b border-black p-6 xl:p-3">
          <div className="flex items-center gap-3">
            <span className="text-xl font-medium tracking-wider xl:text-base">Período</span>
            <SVGChevronDown />
          </div>
          <span className="text-xl tracking-wider text-gray-600 xl:text-base">Borrar filtros</span>
        </div>

        {filterOptions.map((filterOption, index) => <FilterOptionRow key={index} row={filterOption} actualOption={actualOption} />)}

        <div className="p-4 px-6 text-xl text-gray-600 flex justify-between items-center xl:text-base xl:p-1 xl:px-2">
          <span>Otro período</span>
          <SVGChevronRight className="size-5 opacity-100 xl:size-3" />
        </div>

        <div className="w-full my-8 flex justify-center xl:my-4">
          <button className="button-form card-shadow p-2 w-10/12 xl:text-base">Aplicar</button>
        </div>

      </div>

    </details>
  )
}

const FilterOptionRow = ({ row, actualOption }) => {
  return (
    <div className={`p-4 px-6 text-xl text-gray-600 flex justify-between items-center ${actualOption === row.id && "opacity-100 font-bold"} xl:p-1 xl:px-2 xl:text-base`}>
      <span>{row.name}</span>
      {actualOption === row.id
        ? <SVGCheckboxFill className="size-6 text-primary xl:size-3" />
        : <SVGCheckbox className="size-6 xl:size-3" />
      }
    </div>
  )
}