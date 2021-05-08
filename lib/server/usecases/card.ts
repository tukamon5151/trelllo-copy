import { plainToClass } from 'class-transformer'
import { Card } from '@prisma/client'
import { CreateCard, GetCards, ResponseCard } from '../../../dto/card'
import { createCardRequest, getCardsRequest } from '../repositories/card'

export const createCard = async (dto: CreateCard): Promise<ResponseCard> => {
  const data = await createCardRequest(dto)
  return transformClass(data) as ResponseCard
}

export const getCards = async (dto: GetCards): Promise<ResponseCard[]> => {
  const data = await getCardsRequest(dto)
  return transformClass(data) as ResponseCard[]
}

const transformClass = (data: Card | Card[]): ResponseCard | ResponseCard[] => {
  return plainToClass(ResponseCard, data, { excludeExtraneousValues: true })
}
