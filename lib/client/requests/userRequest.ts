import { plainToClass } from 'class-transformer'
import { User } from '../../../model/client/User'
import { UpdateUser, ResponseUser } from '../../../dto/user'
import { patchRequest, getRequest } from './request'

type ResponseType = {
  user: ResponseUser
}

export const patchMeRequest = async (user: UpdateUser): Promise<User> => {
  const data = (await patchRequest(
    '/api/me',
    JSON.stringify({ user }),
  )) as ResponseType
  return transformClass(data.user)
}

export const patchIconRequest = async (FormData: FormData): Promise<User> => {
  const data = (await patchRequest('/api/me/icon', FormData)) as ResponseType
  return transformClass(data.user)
}

export const getMeRequest = async (): Promise<User> => {
  const data = (await getRequest('/api/me')) as ResponseType
  return transformClass(data.user)
}

const transformClass = (data: ResponseUser) =>
  plainToClass(User, data, { excludeExtraneousValues: true })
