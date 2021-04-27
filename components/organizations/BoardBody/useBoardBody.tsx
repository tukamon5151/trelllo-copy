import { useRef, createContext, useContext } from 'react'
import { useListsState } from '../../../lib/client/state/lists'
import { filterByBoardId } from '../../../lib/client/selectors/list'
import { sortByPosition } from '../../../lib/client/hooks/useSortable'
import { List } from '../../../model/client/List'

type Position = {
  left: number
  width: number
}

export const useBoardBodyCore = ({ boardId }) => {
  const lists = sortByPosition<List>(
    filterByBoardId(useListsState().lists, boardId),
  )

  const positions = useRef<Position[]>([]).current
  const setPosition = (index: number, offset: Position) =>
    (positions[index] = offset)

  return {
    lists,
    setPosition,
    positions,
  }
}

type ContextValue = ReturnType<typeof useBoardBodyCore>

const BoardBodyContext = createContext<ContextValue>({} as ContextValue)
export const BoardBodyProvider = BoardBodyContext.Provider
export const useBoardBody = () => useContext<ContextValue>(BoardBodyContext)
