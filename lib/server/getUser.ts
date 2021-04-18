import { User } from '@prisma/client'
import { prisma } from './prisma'

export const getUser = async (id: number): Promise<User> => {
  return await prisma.user.findUnique({ where: { id } })
}
