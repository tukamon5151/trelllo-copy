import { Expose } from 'class-transformer'
import { BoardColor } from '../../dto/board'

export class Board {
  @Expose() id: number
  @Expose() title: string
  @Expose() star: boolean
  @Expose() image?: string
  @Expose() color?: BoardColor
}
