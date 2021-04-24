import { plainToClass } from 'class-transformer'
import { User } from '../../../model/client/User'
import { UpdateUser } from '../../../dto/user'
import { patchRequest, getRequest } from './request'

type ResponseType = {
  user: Record<string, unknown>
}

export const patchMeRequest = async (user: UpdateUser): Promise<User> => {
  const data = (await patchRequest(
    '/api/me',
    JSON.stringify({ user }),
  )) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}

export const patchIconRequest = async (FormData: FormData): Promise<User> => {
  const data = (await patchRequest('/api/me/icon', FormData)) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}

export const getMeRequest = async (): Promise<User> => {
  const data = (await getRequest('/api/me')) as ResponseType
  return plainToClass(User, data.user, { excludeExtraneousValues: true })
}
