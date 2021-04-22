import { plainToClass } from 'class-transformer'
import { List } from '../../../model/client/List'
import { CreateList, ResponseList } from '../../../dto/list'
import { postRequest } from './request'

type CreateListResponse = {
  list: ResponseList
}

export const createListRequest = async (dto: CreateList): Promise<List> => {
  const response = (await postRequest(
    `/api/boards/${dto.boardId}/lists`,
    JSON.stringify({ list: dto }),
  )) as CreateListResponse
  return transformClass(response.list) as List
}

const transformClass = (data: ResponseList): List | List[] => {
  return plainToClass(List, data, { excludeExtraneousValues: true })
}
