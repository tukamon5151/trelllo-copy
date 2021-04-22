import { List } from '../../../model/client/List'

export const filterBy = (lists: List[], boardId: number) =>
  lists.filter((list) => list.boardId === boardId)
