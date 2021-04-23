import { Expose } from 'class-transformer'

export class CreateList {
  @Expose() name: string
  @Expose() boardId: number
}

export class UpadteList {
  @Expose() id: number
  @Expose() name: string
  @Expose() boardId: number
  @Expose() closed: boolean
}

export class ResponseList {
  @Expose() id: number
  @Expose() name: string
  @Expose() boardId: number
  @Expose() closed: boolean
}
