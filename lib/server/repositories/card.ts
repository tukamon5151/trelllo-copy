import { Card } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateCard, GetCards } from '../../../dto/card'
import { selectExistsProps } from '../../selectExistsProps'

export const createCardRequest = async (dto: CreateCard): Promise<Card> => {
  return await prisma.card.create({
    data: dto,
  })
}

export const getCardsRequest = async (dto: GetCards): Promise<Card[]> => {
  const where = dto.listIds?.length ? { listId: { in: dto.listIds } } : {}
  return await prisma.card.findMany({
    where: selectExistsProps(where),
  })
}
