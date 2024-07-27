export const getDateData = (date: string) => {
  const actualDate = new Date(date)
  const year = actualDate.getFullYear()
  const month = actualDate.getMonth()
  const day = actualDate.getDate()
  const time = `${actualDate.getUTCHours()}:${actualDate.getMinutes()}`
  return [year, month, day, time]
}

export const monthStr = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

export const datedForm = (dated: string) => {
  const [year, month, day, time] = getDateData(dated)
  return `Creada el ${day} de ${monthStr[+month]} ${year} a ${time}hs`
}

const spanishDayOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

export const getWeekDay = (date: string) => {
  const d = new Date(date);
  let day = d.getDay()
  return spanishDayOfWeek[day]
}