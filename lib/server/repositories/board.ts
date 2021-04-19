import { Board } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateBoard } from '../../../dto/board'

export const getBoards = async (userId: number): Promise<Board[]> => {
  return await prisma.board.findMany({ where: { userId } })
}

export const createBoard = async (
  userId: number,
  createBoardDto: CreateBoard,
): Promise<Board> => {
  return await prisma.board.create({
    data: {
      ...createBoardDto,
      userId
    },
  })
}
