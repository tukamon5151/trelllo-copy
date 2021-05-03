import { Expose } from 'class-transformer'

export class Card {
  @Expose() id: number
  @Expose() title: string
  @Expose() listId: number
}
