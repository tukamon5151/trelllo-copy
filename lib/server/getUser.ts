import { prisma } from './prisma'

export const getUser = async (userId: number) => {
  return await prisma.user.findUnique({ where: { id: userId } })
}
