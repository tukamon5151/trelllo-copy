import { plainToClass } from 'class-transformer'
import {
  getBoardsRequest,
  createBoardRequest,
  createBoardStarRequest,
  deleteBoardStarRequest,
} from '../repositories/board'
import { withStar } from '../selectors/board'
import { CreateBoard, ResponseBoard } from '../../../dto/board'

export const getBoards = async (userId: number): Promise<ResponseBoard[]> => {
  const data = await getBoardsRequest(userId)
  return transformClass(withStar(data, userId)) as ResponseBoard[]
}

export const createBoard = async (userId: number, boardDto: CreateBoard): Promise<ResponseBoard> => {
  const data = await createBoardRequest(userId, boardDto)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const createBoardStar = async (userId: number, boardId: number): Promise<ResponseBoard> => {
  const data = await createBoardStarRequest(userId, boardId)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const deleteBoardStar = async (userId: number, boardId: number): Promise<ResponseBoard> => {
  const data = await deleteBoardStarRequest(userId, boardId)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

const transformClass = (boards: ReturnType<typeof withStar>): ResponseBoard | ResponseBoard[] => {
  return plainToClass<ResponseBoard, typeof boards>(ResponseBoard, boards, {
    excludeExtraneousValues: true,
  })
}
