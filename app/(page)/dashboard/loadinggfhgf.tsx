import SVGSpinner from "@/app/assets/SVG/SVGSpinner";

export default function loading() {
  return (
    <div className="absolute inset-0 backdrop-blur flex justify-center items-center"><SVGSpinner className="size-20" /></div>
  )
}
