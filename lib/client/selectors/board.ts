import { Board } from '../../../model/client/Bard'

export const findBoard = (boards: Board[], boardId): Board | undefined =>
  boards.find((board) => board.id === boardId)
