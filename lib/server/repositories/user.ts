import { User } from '@prisma/client'
import { UpdateUser } from '../../../dto/user'
import { prisma } from '../prisma'

export const getUser = async (id: number): Promise<User> => {
  return await prisma.user.findUnique({ where: { id } })
}

export const updateUser = async (
  id: number,
  userDto: UpdateUser,
): Promise<User> => {
  return await prisma.user.update({
    data: userDto,
    where: {
      id,
    },
  })
}
