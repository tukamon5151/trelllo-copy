import { Board } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateBoard } from '../../../dto/board'

export const getBoards = async (userId: number): Promise<Board[]> => {
  return await prisma.board.findMany({ where: { userId } })
}

export const createBoard = async (boardDto: CreateBoard): Promise<Board> => {
  return await prisma.board.create({ data: boardDto })
}
