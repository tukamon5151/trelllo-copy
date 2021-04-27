import { Expose } from 'class-transformer'

export class GetLists {
  @Expose() boardId: number
  @Expose() closed?: boolean
}

export class CreateList {
  @Expose() name: string
  @Expose() boardId: number
  @Expose() position: number
}

export class UpdateList {
  @Expose() id: number
  @Expose() name?: string
  @Expose() boardId?: number
  @Expose() closed?: boolean
  @Expose() position?: number
}

export class ResponseList {
  @Expose() id: number
  @Expose() name: string
  @Expose() boardId: number
  @Expose() closed: boolean
  @Expose() position: number
}
