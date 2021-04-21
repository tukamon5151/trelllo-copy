import { BoardWithStarRelation } from '../repositories/board'

export const withStar = (
  boards: BoardWithStarRelation[] | BoardWithStarRelation,
  userId: number,
) => {
  if (boards instanceof Array) {
    return boards.map((board) => convertBoard(board, userId))
  }

  return convertBoard(boards, userId)
}

const convertBoard = (board: BoardWithStarRelation, userId: number) => {
  const dupBoard: BoardWithStarRelation & { star: boolean } = {
    ...board,
    star: false,
  }
  dupBoard.star = board.boardStarRelations.some((r) => r.userId === userId)
  return dupBoard
}
