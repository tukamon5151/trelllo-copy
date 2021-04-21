import { User } from '@prisma/client'
import { plainToClass } from 'class-transformer'
import { UpdateUser, ResponseUser } from '../../../dto/user'
import { updateUserRequest, getUserRequest } from '../repositories/user'

export const updateUser = async (
  userId: number,
  dto: UpdateUser,
): Promise<ResponseUser> => {
  const data = await updateUserRequest(userId, dto)
  return transformClass(data) as ResponseUser
}

export const getUser = async (userId: number): Promise<ResponseUser | void> => {
  const data = await getUserRequest(userId)
  if (!data) return
  return transformClass(data) as ResponseUser
}

const transformClass = (user: User | User[]): ResponseUser | ResponseUser[] =>
  plainToClass(ResponseUser, user, { excludeExtraneousValues: true })
