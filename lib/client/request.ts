export const patch = async (url: string, data: BodyInit) => {
  const response = await fetch(url, {
    method: 'PATCH',
    body: data,
  })
  return response.json()
}

export const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
  })
  return response.json()
}
