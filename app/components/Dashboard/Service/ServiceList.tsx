import Link from 'next/link'
import React from 'react'

export default function ServiceList() {

  const accountId = "85"
  const servicesData = [
    {
      "id": 1,
      "name": "Netflix",
      "date": "2023-04-30"
    },
    {
      "id": 2,
      "name": "Amazon Prime Video",
      "date": "2023-04-28"
    },
    {
      "id": 11,
      "name": "Funimation",
      "date": "2023-04-21"
    },
    {
      "id": 8,
      "name": "Peacock",
      "date": "2023-04-16"
    },
    {
      "id": 5,
      "name": "Paramount+",
      "date": "2023-04-13"
    },
    {
      "id": 12,
      "name": "Mubi",
      "date": "2023-04-12"
    },
    {
      "id": 10,
      "name": "Crunchyroll",
      "date": "2023-04-10"
    },
    {
      "id": 9,
      "name": "Discovery+",
      "date": "2023-04-09"
    },
    {
      "id": 7,
      "name": "Hulu",
      "date": "2023-04-07"
    },
    {
      "id": 6,
      "name": "Apple TV+",
      "date": "2023-04-06"
    },
    {
      "id": 4,
      "name": "Disney+",
      "date": "2023-04-04"
    },
    {
      "id": 3,
      "name": "HBO Max",
      "date": "2023-04-03"
    }
  ]

  return (
    <div className="bg-my-white card p-16 py-8">
      <h2 className='text-2xl font-bold border-b-[1px] border-gray-400 pb-8 sm:text-3xl xl:text-2xl'>Más recientes</h2>
      {servicesData.map(service => <ServiceRow key={service.id} service={service} accountId={accountId} />)}
    </div>
  )
}

const ServiceRow = ({ service, accountId }) => {

  return (
    <div className='flex justify-between text-2xl font-light border-b-[1px] border-gray-400 py-5 xl:text-xl'>
      <span>{service.name}</span>
      <Link className='font-bold' href={`/dashboard/accounts/${accountId}/service/${service.id}/bill`}>Seleccionar</Link>
    </div>
  )
}