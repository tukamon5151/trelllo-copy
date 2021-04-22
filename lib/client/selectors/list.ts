import { List } from '../../../model/client/List'

export const filterByBoardId = (lists: List[], boardId: number) =>
  lists.filter((list) => list.boardId === boardId)

export const refreshByBoardId = (
  lists: List[],
  mergeLists: List[],
  boardId: number,
): List[] => {
  return [...excludeByBoardId(lists, boardId), ...mergeLists]
}

const excludeByBoardId = (lists: List[], boardId: number): List[] =>
  lists.filter((list) => list.boardId !== boardId)
