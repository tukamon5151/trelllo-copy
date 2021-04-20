export const patchRequest = async (
  url: string,
  body: BodyInit,
): Promise<unknown> => {
  return await customFetch(url, 'patch', { body })
}

export const getRequest = async (url: string): Promise<unknown> => {
  return await customFetch(url, 'get')
}

export const postRequest = async (
  url: string,
  body?: BodyInit,
): Promise<unknown> => {
  return await customFetch(url, 'post', { body })
}

export const deleteRequest = async (url: string): Promise<unknown> => {
  return await customFetch(url, 'delete')
}

const customFetch = async (
  url: string,
  method: string,
  init?: RequestInit,
): Promise<unknown> => {
  const response = await fetch(url, { method, ...init })
  return response.json()
}
