const spanishDayOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

export const getWeekDay = (date: string) => {
  const d = new Date("2024-07-07T18:53:22.11Z");
  let day = d.getDay()
  return spanishDayOfWeek[day]
}