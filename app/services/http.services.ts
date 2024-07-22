export const httpPost = async (endpoint: string, data?: object | null, token?: string) => {
  const res = await fetch(`http://localhost:3000/${endpoint}`, {
    method: 'POST',
    headers: !token
      ? { 'Content-Type': 'application/json' }
      : {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    body: JSON.stringify(data ?? {})
  });

  return res.json();
}