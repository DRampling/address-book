const headers = { Accept: 'application/json' }

export async function callAPI(method: string, url: string, path: string, data?: any) {
  const res = await fetch(`${url}${path}`, { method, headers, body: JSON.stringify(data) })
  return res.ok ? res.json() : res
}
