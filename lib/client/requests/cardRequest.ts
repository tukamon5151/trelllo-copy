import { plainToClass } from 'class-transformer'
import { Card } from '../../../model/client/Card'
import { CreateCard, ResponseCard } from '../../../dto/card'
import { getRequest, postRequest } from './request'

type CreateCardResponse = {
  card: ResponseCard
}

export const createCardRequest = async (card: CreateCard): Promise<Card> => {
  const response = (await postRequest(
    `/api/lists/${card.listId}/cards`,
    JSON.stringify({ card }),
  )) as CreateCardResponse
  return transformClass(response.card) as Card
}

type GetCardsResponse = {
  cards: Card[]
}

export const getCardsRequest = async (listIds: number[]): Promise<Card[]> => {
  const query = new URLSearchParams(
    listIds.map((listId) => ['listIds', String(listId)]),
  )
  const response = (await getRequest(
    `/api/cards/?listIds=?${query}`,
  )) as GetCardsResponse
  return transformClass(response.cards) as Card[]
}

const transformClass = (data: ResponseCard | ResponseCard[]): Card | Card[] =>
  plainToClass(Card, data, { excludeExtraneousValues: true })
