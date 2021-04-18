import { plainToClass } from 'class-transformer'
import { Board } from '../../model/client/Bard'
import { get } from './request'

type ResponseType = {
  boards: Record<string, unknown>[]
}

export const getBoards = async (): Promise<Board[]> => {
  const data = (await get('api/boards')) as ResponseType
  return plainToClass(Board, data.boards)
}
