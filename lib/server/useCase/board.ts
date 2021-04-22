import { plainToClass } from 'class-transformer'
import {
  getBoardsRequest,
  getBoardRequest,
  createBoardRequest,
  createBoardStarRequest,
  deleteBoardStarRequest,
  updateBoardRequest,
} from '../repositories/board'
import { withStar } from '../selectors/board'
import { CreateBoard, ResponseBoard, UpdateBoard } from '../../../dto/board'
export const getBoards = async (userId: number): Promise<ResponseBoard[]> => {
  const data = await getBoardsRequest(userId)
  return transformClass(withStar(data, userId)) as ResponseBoard[]
}

export const getBoard = async (
  userId: number,
  boardId: number,
): Promise<ResponseBoard | void> => {
  const data = await getBoardRequest(userId, boardId)
  if (!data) return
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const createBoard = async (
  userId: number,
  boardDto: CreateBoard,
): Promise<ResponseBoard> => {
  const data = await createBoardRequest(userId, boardDto)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const updateBoard = async (
  userId: number,
  boardDto: UpdateBoard,
): Promise<ResponseBoard> => {
  // userId, boardIdペアの存在チェック
  // prismaはupdateメソッドでwhere句にunique or primary keyしか指定出来ず、
  // わざわざuserId, boardIdのunique keyみたいな無駄なkeyを設定したくなかったのでこうしている
  await getBoardRequest(userId, boardDto.id)
  const data = await updateBoardRequest(boardDto)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const createBoardStar = async (
  userId: number,
  boardId: number,
): Promise<ResponseBoard> => {
  const data = await createBoardStarRequest(userId, boardId)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

export const deleteBoardStar = async (
  userId: number,
  boardId: number,
): Promise<ResponseBoard> => {
  const data = await deleteBoardStarRequest(userId, boardId)
  return transformClass(withStar(data, userId)) as ResponseBoard
}

const transformClass = (
  boards: ReturnType<typeof withStar>,
): ResponseBoard | ResponseBoard[] => {
  return plainToClass<ResponseBoard, typeof boards>(ResponseBoard, boards, {
    excludeExtraneousValues: true,
  })
}
