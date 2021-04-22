import { Expose } from 'class-transformer'

export class List {
  @Expose() id: number
  @Expose() name: string
  @Expose() boardId: number
}