//*****************************************************************************

import { getData } from "./direct.services"

//                  ACCOUNT
export const getAccountData = async (token: string) => {
  return getData("api/account", token)
}