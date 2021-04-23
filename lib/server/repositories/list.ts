import { List } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateList, GetLists, UpdateList } from '../../../dto/list'
import { selectExistsProps } from '../../selectExistsProps'

export const createListRequest = async (listDto: CreateList): Promise<List> => {
  return await prisma.list.create({
    data: listDto,
  })
}

export const getListsRequest = async (dto: GetLists): Promise<List[]> => {
  return await prisma.list.findMany({
    where: selectExistsProps(dto),
  })
}

export const updateListRequest = async (dto: UpdateList): Promise<List> => {
  return await prisma.list.update({
    where: { id: dto.id },
    data: dto,
  })
}
