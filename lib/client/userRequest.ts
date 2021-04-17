import { plainToClass } from 'class-transformer'
import { User } from '../../model/client/User'
import { patch, get } from './request'

export const patchMe = async (user: User): Promise<User> => {
  const json = await patch('/api/me', JSON.stringify({ user }))
  return plainToClass(User, json.user)
}

export const patchIcon = async (FormData: FormData): Promise<User> => {
  const json = await patch('/api/me/icon', FormData)
  return plainToClass(User, json.user)
}

export const getMe = async (): Promise<User> => {
  const json = await get('/api/me')
  return plainToClass(User, json.user)
}
