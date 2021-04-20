import { BoardColor } from '../../dto/board'

export class Board {
  id: number
  title: string
  star: boolean
  image?: string
  color?: BoardColor
}
