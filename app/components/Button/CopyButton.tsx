"use client"

import { toast } from "sonner"
import SVGCopy from "../../assets/SVG/SVGCopy"
import { useRouter } from "next/navigation"

export default function CopyButton({ value, redirectURL }: { value: string, redirectURL?: string }) {

  const router = useRouter()

  const handleCopy = (value: string) => {
    toast.success(`${value} copiado`)
    if (redirectURL)
      router.push(redirectURL)
  }

  return (
    <div onClick={() => handleCopy(value)}>
      <SVGCopy className="size-8 sm:size-12 sm:absolute sm:right-0  xl:size-8" />
    </div>
  )
}
