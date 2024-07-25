import { LoginTypes, RegisterTypes } from "../types/auth.types"
import { httpPost } from "./http.services"

export const logout = async () => {
  return httpPost("api/auth/logout")
}

export const login = async ({ email, password }: LoginTypes) => {
  return httpPost("api/auth/login", { email, password })
}

export const register = async (registerData: RegisterTypes) => {
  return httpPost('api/auth/register', registerData);
}