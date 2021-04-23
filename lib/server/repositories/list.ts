import { List } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateList, UpdateList } from '../../../dto/list'

export const createListRequest = async (listDto: CreateList): Promise<List> => {
  return await prisma.list.create({
    data: listDto,
  })
}

export const getListsRequest = async (boardId: number): Promise<List[]> => {
  return await prisma.list.findMany({
    where: { boardId },
  })
}

export const updateListRequest = async (dto: UpdateList): Promise<List> => {
  return await prisma.list.update({
    where: { id: dto.id },
    data: dto,
  })
}
