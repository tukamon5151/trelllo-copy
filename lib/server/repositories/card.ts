import { Card } from '@prisma/client'
import { prisma } from '../prisma'
import { CreateCard } from '../../../dto/card'

export const createCardRequest = async (dto: CreateCard): Promise<Card> => {
  return await prisma.card.create({
    data: dto,
  })
}
