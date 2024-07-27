import { ActivityDataTypes } from "../types/account.types";

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
    const [day, month, year] = new Date().toLocaleDateString().split("/");
    const correctMonth = month.length < 2 ? "0" + month : month
    const correctDay = day.length < 2 ? "0" + day : day
    const today = `${year}-${correctMonth}-${correctDay}`
    if (filter === "hoy") {
      result = activityData.filter(activity => activity.dated.substring(0, 10) === today)
    }
    if (filter === "mes") {
      result = activityData.filter(activity => activity.dated.substring(5, 7) === correctMonth &&
        activity.dated.substring(0, 4) === year)
    }
    if (filter === "anio") {
      result = activityData.filter(activity => activity.dated.substring(0, 4) === year)
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