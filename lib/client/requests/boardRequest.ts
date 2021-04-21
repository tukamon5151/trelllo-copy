import { plainToClass } from 'class-transformer'
import { Board } from '../../../model/client/Bard'
import { CreateBoard, ResponseBoard, UpdateBoard } from '../../../dto/board'
import { deleteRequest, getRequest, patchRequest, postRequest } from './request'

type GetBoardsResponse = {
  boards: ResponseBoard[]
}

export const getBoardsRequest = async (): Promise<Board[]> => {
  const response = (await getRequest('/api/boards')) as GetBoardsResponse
  return transformClass(response.boards) as Board[]
}

type GetBoardResponse = {
  board: ResponseBoard
}

export const getBoardRequest = async (boardId: number): Promise<Board> => {
  const data = (await getRequest(`/api/boards/${boardId}`)) as GetBoardResponse
  return transformClass(data.board) as Board
}

type CreateBoardResponse = {
  board: ResponseBoard
}
export const createBoardRequest = async (
  board: CreateBoard,
): Promise<Board> => {
  const response = (await postRequest(
    '/api/boards',
    JSON.stringify({ board }),
  )) as CreateBoardResponse
  return transformClass(response.board) as Board
}

type UpdateBoardResponse = {
  board: ResponseBoard
}
export const updateBoardRequest = async (
  board: UpdateBoard,
): Promise<ResponseBoard> => {
  const response = (await patchRequest(
    `/api/boards/${board.id}`,
    JSON.stringify({ board }),
  )) as UpdateBoardResponse
  return transformClass(response.board) as Board
}

type AddStarResponse = {
  board: ResponseBoard
}
export const addStarRequest = async (boardId: number): Promise<Board> => {
  const response = (await postRequest(
    `/api/boards/${boardId}/stars`,
  )) as AddStarResponse
  return transformClass(response.board) as Board
}

type RemoveStarResponse = {
  board: ResponseBoard
}

export const removeStarRequest = async (boardId: number): Promise<Board> => {
  const response = (await deleteRequest(
    `/api/boards/${boardId}/stars`,
  )) as RemoveStarResponse
  return transformClass(response.board) as Board
}

const transformClass = (
  data: ResponseBoard | ResponseBoard[],
): Board | Board[] =>
  plainToClass(Board, data, { excludeExtraneousValues: true })
