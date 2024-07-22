import { getAccountData } from "@/app/services/account.services";
import { getUserData } from "@/app/services/user.services";
import { AccountDataTypes } from "@/app/types/account.types";
import { DecodeTokenTypes, UserDataTypes } from "@/app/types/user.types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieOptions = { expires: new Date(new Date().getTime() + 3600000) }

export async function POST(request: NextRequest) {

  try {
    const { email, password } = await request.json();

    const loginResp = await fetch("https://digitalmoney.digitalhouse.com/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const loginData = await loginResp.json()
    if (loginData.error) {
      throw new Error(loginData.error)
    }
    const { token } = loginData
    const { username: userId } = jwtDecode<DecodeTokenTypes>(token)

    const userDataPromise: Promise<UserDataTypes> = await getUserData(userId, token,)
    const accountDataPromise: Promise<AccountDataTypes> = await getAccountData(token)
    const [userData, accountData] = await Promise.all([userDataPromise, accountDataPromise])

    const userName = `${userData.firstname} ${userData.lastname}`
    const accountId = accountData.id.toString()

    cookies().set('token', token, cookieOptions)
    cookies().set('userid', userId, cookieOptions)
    cookies().set('username', userName, cookieOptions)
    cookies().set('accountid', accountId, cookieOptions)

    console.log("--------------------------------- LOGIN RESPONSE -------------------------------")
    console.log("token :", token !== "")
    console.log({ userId, userName, accountId })

    return new NextResponse(JSON.stringify(loginData), {
      status: 200,
    })

  } catch (e) {
    if (e instanceof Error) {
      console.log("-------------------------------- ROUTE api/login ERROR : ", e.message)
      return new NextResponse(JSON.stringify({
        error: e.message
      }), {
        status: 500,
      })
    }
  }
}



