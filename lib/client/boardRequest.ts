import { plainToClass } from 'class-transformer'
import { Board } from '../../model/client/Bard'
import { CreateBoard, ResponseBoard } from '../../dto/board'
import { get, post } from './request'

type GetResponseType = {
  boards: ResponseBoard[]
}

export const getBoards = async (): Promise<Board[]> => {
  const data = (await get('api/boards')) as GetResponseType
  return plainToClass(Board, data.boards)
}

type PostResponseType = {
  board: ResponseBoard
}
export const createBoard = async (board: CreateBoard): Promise<Board> => {
  const data = (await post(
    '/api/boards',
    JSON.stringify({ board }),
  )) as PostResponseType
  return plainToClass(Board, data.board)
}
