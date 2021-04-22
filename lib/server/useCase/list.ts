import { plainToClass } from 'class-transformer'
import { List } from '@prisma/client'
import { CreateList, ResponseList } from '../../../dto/list'
import { createListRequest, getListsRequest } from '../repositories/list'

export const createList = async (
  listDto: CreateList,
): Promise<ResponseList> => {
  const data = await createListRequest(listDto)
  return transformClass(data) as ResponseList
}

export const getLists = async (boardId: number): Promise<ResponseList[]> => {
  const data = await getListsRequest(boardId)
  return transformClass(data) as ResponseList[]
}

const transformClass = (data: List | List[]): ResponseList | ResponseList[] => {
  return plainToClass(ResponseList, data, { excludeExtraneousValues: true })
}
