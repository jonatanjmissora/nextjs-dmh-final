import { getData } from "./direct.services"

export const getAccountData = async (token: string) => {
  return getData("api/account", token)
}
