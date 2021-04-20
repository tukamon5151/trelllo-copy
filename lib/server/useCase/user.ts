import { User } from '@prisma/client'
import { plainToClass } from 'class-transformer'
import { UpdateUser, ResponseUser } from '../../../dto/user'
import { updateUserRequest, getUserRequest } from '../repositories/user'

export const updateUser = async (userId: number, dto: UpdateUser) => {
  const data = await updateUserRequest(userId, dto)
  return transformClass(data)
}

export const getUser = async (userId: number) => {
  const data = await getUserRequest(userId)
  if (!data) return
  return transformClass(data)
}

const transformClass = (user: User | User[]) =>
  plainToClass(ResponseUser, user, { excludeExtraneousValues: true })
