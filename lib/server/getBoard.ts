import { Board } from '@prisma/client'
import { prisma } from './prisma'

export const getBoards = async (userId: number): Promise<Board[]> => {
  return await prisma.board.findMany({ where: { userId } })
}
