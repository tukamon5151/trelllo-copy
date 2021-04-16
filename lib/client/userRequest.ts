import { User } from '../../hooks/useUser'
import { patch } from './request'

export const patchMe = async (user: User): Promise<User> => {
  const json = await patch('/api/me', { user })
  return json.user as User
}
