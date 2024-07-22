import { httpPost } from "./http.services"

export const logout = async () => {
  return await httpPost("api/auth/logout")
}

export const login = async ({ email, password }: LoginTypes) => {
  return httpPost("api/auth/login", { email, password })
}