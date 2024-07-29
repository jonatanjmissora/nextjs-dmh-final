
export default function InputSearch({ className, placeholder }: { className: string, placeholder: string }) {
  return (
    <input
      className={`input-form ${className}`}
      placeholder={placeholder}
      type="text"
      autoComplete="on"
    />
  )
}

/*
"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar({ placeholder }: { placeholder: string }) {

  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams()

  const handleChange = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search !== "") {
      params.set('search', search);
      params.set("page", "1")
    } else {
      params.delete('search');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300)

  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className='p-2'
      type="text"
      placeholder={placeholder}
      defaultValue={searchParams.get('search')?.toString()}
    />
  )
}
*/
