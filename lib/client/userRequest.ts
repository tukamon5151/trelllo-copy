import { plainToClass } from 'class-transformer'
import { User } from '../../model/client/User'
import { patch, get } from './request'

type ResponseType = {
  user: Record<string, unknown>
}

export const patchMeRequest = async (user: User): Promise<User> => {
  const data = (await patch(
    '/api/me',
    JSON.stringify({ user }),
  )) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}

export const patchIconRequest = async (FormData: FormData): Promise<User> => {
  const data = (await patch('/api/me/icon', FormData)) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}

export const getMeRequest = async (): Promise<User> => {
  const data = (await get('/api/me')) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}
