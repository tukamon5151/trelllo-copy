import { plainToClass } from 'class-transformer'
import {
  getBoardsRequest,
  createBoardRequest,
  createBoardStarRequest,
} from '../repositories/board'
import { withStar } from '../selector/board'
import { CreateBoard, ResponseBoard } from '../../../dto/board'

export const getBoards = async (userId: number) => {
  const data = await getBoardsRequest(userId)
  return transformClass(withStar(data, userId))
}

export const createBoard = async (userId: number, boardDto: CreateBoard) => {
  const data = await createBoardRequest(userId, boardDto)
  return transformClass(withStar(data, userId))
}

export const createBoardStar = async (userId: number, boardId: number) => {
  const data = await createBoardStarRequest(userId, boardId)
  return transformClass(withStar(data, userId))
}

const transformClass = (boards: ReturnType<typeof withStar>) => {
  return plainToClass<ResponseBoard, typeof boards>(ResponseBoard, boards, {
    excludeExtraneousValues: true,
  })
}
