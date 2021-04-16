export const patch = async (url: string, data: Record<string, unknown>) => {
  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
  return response.json()
}
