import { User } from '../../hooks/useUser'
import { patch } from './request'

export const patchMe = async (user: User): Promise<User> => {
  const json = await patch('/api/me', JSON.stringify({ user }))
  return json.user as User
}

export const patchIcon = async (FormData): Promise<User> => {
  const json = await patch('/api/me/icon', FormData)
  return json.user as User
}
