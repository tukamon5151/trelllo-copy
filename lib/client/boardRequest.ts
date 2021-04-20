import { plainToClass } from 'class-transformer'
import { Board } from '../../model/client/Bard'
import { CreateBoard, ResponseBoard } from '../../dto/board'
import { deleteRequest, getRequest, postRequest } from './request'

type GetBoardsResponse = {
  boards: ResponseBoard[]
}

export const getBoardsRequest = async (): Promise<Board[]> => {
  const data = (await getRequest('api/boards')) as GetBoardsResponse
  return plainToClass(Board, data.boards, { excludeExtraneousValues: true })
}

type CreateBoardResponse = {
  board: ResponseBoard
}
export const createBoardRequest = async (
  board: CreateBoard,
): Promise<Board> => {
  const data = (await postRequest(
    '/api/boards',
    JSON.stringify({ board }),
  )) as CreateBoardResponse
  return plainToClass(Board, data.board, { excludeExtraneousValues: true })
}

type AddStarResponse = {
  board: ResponseBoard
}
export const addStarRequest = async (boardId: number): Promise<Board> => {
  const data = (await postRequest(
    `/api/boards/${boardId}/stars`,
  )) as AddStarResponse
  return plainToClass(Board, data.board, { excludeExtraneousValues: true })
}

type RemoveStarResponse = {
  board: ResponseBoard
}

export const removeStarRequest = async (boardId: number): Promise<Board> => {
  const data = (await deleteRequest(
    `/api/boards/${boardId}/stars`,
  )) as RemoveStarResponse
  return plainToClass(Board, data.board, { excludeExtraneousValues: true })
}
