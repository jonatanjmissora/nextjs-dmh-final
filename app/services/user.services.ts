import { getData } from "./direct.services"

export const getUserData = async (userId: string, token: string) => {
  return getData(`api/users/${userId}`, token,)
}