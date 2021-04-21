export const patchRequest = async (
  url: string,
  body?: BodyInit,
): Promise<unknown> => {
  return await customFetch(url, 'PATCH', { body })
}

export const getRequest = async (url: string): Promise<unknown> => {
  return await customFetch(url, 'GET')
}

export const postRequest = async (
  url: string,
  body?: BodyInit,
): Promise<unknown> => {
  return await customFetch(url, 'POST', { body })
}

export const deleteRequest = async (url: string): Promise<unknown> => {
  return await customFetch(url, 'DELETE')
}

const customFetch = async (
  url: string,
  method: string,
  init?: RequestInit,
): Promise<unknown> => {
  const response = await fetch(url, { method, ...init })
  return response.json()
}
