import { Expose } from 'class-transformer'

export class CreateCard {
  @Expose() title: string
  @Expose() listId: number
}