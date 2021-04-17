export const patch = async (url: string, data: BodyInit) => {
  const response = await fetch(url, {
    method: 'PATCH',
    body: data,
  })
  return response.json()
}
