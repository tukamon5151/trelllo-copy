import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  useBoardsDispatch,
  useBoardsState,
} from '../../../lib/client/state/boards'
import { useListsState } from '../../../lib/client/state/lists'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { findBoard } from '../../../lib/client/selectors/board'
import { Board } from '../../../model/client/Bard'

export const useBoardShow = () => {
  const { boards } = useBoardsState()
  const { getBoard } = useBoardsDispatch()
  const { lists } = useListsState()
  const { getInitialLists } = useListUseCases()

  const router = useRouter()
  const boardId = parseInt(router.query.id as string)
  const board: Board | undefined = findBoard(boards, boardId)

  useEffect(() => {
    if (!boardId) return
    const getBoardPromise = !board
      ? getBoard(boardId)
      : new Promise(() => undefined)
    const getListsPromise = !lists.length
      ? getInitialLists(boardId)
      : new Promise(() => undefined)
    Promise.all([getBoardPromise, getListsPromise])
  }, [boardId])

  return {
    board,
  }
}
