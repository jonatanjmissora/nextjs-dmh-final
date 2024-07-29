import { ActivityDataTypes } from "../types/account.types";
import { getLocaleDate, getAnotherDate } from "./getDateData";

export const getActualActivities = (activityData: ActivityDataTypes[], filter?: string, search?: string) => {
  let filteredResult = [...activityData]
  if (filter)
    filteredResult = filteredActivities(filteredResult, filter)

  let searchedResult = [...filteredResult]
  if (search)
    searchedResult = searchedActivities(searchedResult, search)

  return searchedResult
}

const filteredActivities = (activityData: ActivityDataTypes[], filter: string) => {
  let result = activityData
  if (filter) {
    const [year, month, day, time] = getLocaleDate(new Date().toString())
    const today = `${year}-${month}-${day}`

    if (filter === "hoy") {
      result = activityData.filter(activity => activity.dated.substring(0, 10) === today)
    }

    if(filter === "ayer") {
      const yesterday = getAnotherDate(today, 1)
      result = activityData.filter(activity => activity.dated.substring(0, 10) === yesterday.substring(0, 10))
    }

    if(filter === "semana") {
      const week = getAnotherDate(today, 7)
      result = activityData.filter(activity => activity.dated >= week)
    }

    if(filter === "quincena") {
      const fortNight = getAnotherDate(today, 15)
      result = activityData.filter(activity => activity.dated >= fortNight)
    }

    if (filter === "mes") {
      const month = getAnotherDate(today, 30)
      result = activityData.filter(activity => activity.dated >= month)
    }
    
    if (filter === "anio") {
      result = activityData.filter(activity => activity.dated.substring(0, 4) === year)
      result.forEach(a => console.log(a.dated.substring(0, 10)))
    }

  }
  return result
}

const searchedActivities = (searchedResult: ActivityDataTypes[], search: string) => {
  return [...searchedResult].filter(activity =>
    activity
      .description
      .toLowerCase()
      .includes(search.toLowerCase()))
}