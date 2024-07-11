import Link from "next/link"

export default function UserEditForm() {

  const userData = {
    email: "jonatanjmissora@gmail.com",
    firstname: "jonatan",
    lastname: "missora",
    dni: 11111111,
    phone: "29155467",
  }

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-4'>
      <input
        type="text"
        name="email"
        required
        defaultValue={userData.email}
        className='border border-gray-500 p-2 text-center w-max'
      />

      <input
        type="text"
        name="username"
        required
        defaultValue={`${userData.firstname}, ${userData.lastname}`}
        className='border border-gray-500 p-2 text-center w-max'
      />

      <div className='flex gap-2 items-center'>
        <input
          type="text"
          name="dni"
          readOnly
          defaultValue={userData.dni}
          className='border border-gray-500 p-2 text-center w-max'
        />
        <span>(swagger no me deja cambiar dni)</span>
      </div>

      <input
        type="text"
        name="phone"
        required
        defaultValue={userData.phone}
        className='border border-gray-500 p-2 text-center w-max'
      />
      <div className='flex gap-4 mt-4'>
        <button >Guardar</button>
        <Link href={`/dashboard/profile`} className='btn'>Cancelar</Link>
      </div>
    </form>
  )
}
