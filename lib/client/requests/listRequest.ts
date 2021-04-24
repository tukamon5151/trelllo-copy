import { plainToClass } from 'class-transformer'
import { List } from '../../../model/client/List'
import {
  CreateList,
  ResponseList,
  UpdateList,
  GetLists,
} from '../../../dto/list'
import { objectToQueryString } from '../../objectToQueryString'
import { getRequest, patchRequest, postRequest } from './request'

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

type GetListsResponse = {
  lists: ResponseList[]
}

export const getListsRequest = async ({
  boardId,
  ...other
}: GetLists): Promise<List[]> => {
  const query = objectToQueryString(other)
  const response = (await getRequest(
    `/api/boards/${boardId}/lists${query}`,
  )) as GetListsResponse
  return transformClass(response.lists) as List[]
}

type UpdateListResponse = {
  list: ResponseList
}

export const updateListRequest = async (dto: UpdateList): Promise<List> => {
  const response = (await patchRequest(
    `/api/lists/${dto.id}`,
    JSON.stringify({ list: dto }),
  )) as UpdateListResponse
  return transformClass(response.list) as List
}

const transformClass = (data: ResponseList | ResponseList[]): List | List[] => {
  return plainToClass(List, data, { excludeExtraneousValues: true })
}
