import { getData } from "./direct.services"

export const getAccountData = async (token: string) => {
  return getData("api/account", token)
}

export const getActivitiesData = async (accountId: string, token: string) => {
  return getData(`api/accounts/${accountId}/activity`, token)
}