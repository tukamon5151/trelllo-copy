import { List } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateList } from '../../../dto/list'

export const createListRequest = async (listDto: CreateList): Promise<List> => {
  return await prisma.list.create({
    data: listDto,
  })
}
