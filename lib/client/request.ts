export const patch = async (url: string, body: BodyInit): Promise<unknown> => {
  return await customFetch(url, 'patch', { body })
}

export const get = async (url: string): Promise<unknown> => {
  const response = await fetch(url, {
    method: 'GET',
  })
  return response.json()
}

export const post = async (url: string, body?: BodyInit): Promise<unknown> => {
  return await customFetch(url, 'post', { body })
}

const customFetch = async (
  url: string,
  method: string,
  init: RequestInit,
): Promise<unknown> => {
  const response = await fetch(url, { method, ...init })
  return response.json()
}
