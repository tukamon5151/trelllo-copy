import { Board, BoardStarRelation } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateBoard } from '../../../dto/board'

export type BoardWithStarRelation = Board & {
  boardStarRelations: BoardStarRelation[]
}

export const getBoardsRequest = async (
  userId: number,
): Promise<BoardWithStarRelation[]> => {
  return await prisma.board.findMany({
    where: { userId },
    include: { boardStarRelations: true },
  })
}

export const createBoardRequest = async (
  userId: number,
  createBoardDto: CreateBoard,
): Promise<BoardWithStarRelation> => {
  return await prisma.board.create({
    data: {
      ...createBoardDto,
      userId,
    },
    include: { boardStarRelations: true },
  })
}

export const createBoardStarRequest = async (
  userId: number,
  boardId: number,
): Promise<BoardWithStarRelation> => {
  return await prisma.board.update({
    where: { id: boardId },
    data: {
      boardStarRelations: {
        create: { userId },
      },
    },
    include: { boardStarRelations: true },
  })
}

export const deleteBoardStarRequest = async (
  userId: number,
  boardId: number,
): Promise<BoardWithStarRelation> => {
  return await prisma.board.update({
    where: { id: boardId },
    data: {
      boardStarRelations: {
        delete: { boardId_userId: { userId, boardId } },
      },
    },
    include: { boardStarRelations: true },
  })
}
