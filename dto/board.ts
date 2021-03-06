import { Expose } from 'class-transformer'

export class ResponseBoard {
  @Expose() id: number
  @Expose() title: string
  @Expose() image?: string
  @Expose() color?: BoardColor
  @Expose() star: boolean
}

export class CreateBoard {
  @Expose() title: string
  @Expose() image?: string
  @Expose() color?: BoardColor
}

export class UpdateBoard {
  @Expose() id: number
  @Expose() title: string
  @Expose() image?: string
  @Expose() color?: BoardColor
}

export type BoardColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'tomato'
  | 'pink'
  | 'gray'
  | 'purple'
