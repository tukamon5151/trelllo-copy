import { Expose } from 'class-transformer'

export class GetCards {
  @Expose() listIds?: number[]
}

export class CreateCard {
  @Expose() title: string
  @Expose() listId: number
}

export class ResponseCard {
  @Expose() id: number
  @Expose() title: string
  @Expose() listId: number
}
