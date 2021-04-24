import { plainToClass } from 'class-transformer'
import { List } from '@prisma/client'
import {
  CreateList,
  GetLists,
  ResponseList,
  UpdateList,
} from '../../../dto/list'
import {
  createListRequest,
  getListsRequest,
  updateListRequest,
} from '../repositories/list'

export const createList = async (
  listDto: CreateList,
): Promise<ResponseList> => {
  const data = await createListRequest(listDto)
  return transformClass(data) as ResponseList
}

export const getLists = async (dto: GetLists): Promise<ResponseList[]> => {
  const data = await getListsRequest(dto)
  return transformClass(data) as ResponseList[]
}

export const updateList = async (dto: UpdateList): Promise<ResponseList> => {
  const data = await updateListRequest(dto)
  return transformClass(data) as ResponseList
}

const transformClass = (data: List | List[]): ResponseList | ResponseList[] => {
  return plainToClass(ResponseList, data, { excludeExtraneousValues: true })
}
