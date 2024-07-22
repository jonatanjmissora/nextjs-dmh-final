const SWAGGER = "https://digitalmoney.digitalhouse.com/"

export const getData = async (endpoint: string, token?: string, userId?: string) => {
  try {
    const res = await fetch(`${SWAGGER}${endpoint}`, {
      method: "GET",
      headers: !token
        ? { 'Content-Type': 'application/json' }
        : {
          'Content-Type': 'application/json',
          "Authorization": token,
          "Id": userId ?? "",
        },
    })
    if (!res.ok) {
      console.log(`${res.status} - ${res.statusText || "No text error"} - POST - ${SWAGGER}${endpoint}`)
      const response = await res.json()
      throw new Error(response.error)
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error)
      console.log("ERROR", error.message)
  }

}