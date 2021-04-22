import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  useBoardsDispatch,
  useBoardsState,
} from '../../../lib/client/hooks/useBoards'
import {
  useListsDispatch,
  useListsState,
} from '../../../lib/client/hooks/useLists'
import { findBoard } from '../../../lib/client/selectors/board'
import { Board } from '../../../model/client/Bard'

export const useBoardShow = () => {
  const { boards } = useBoardsState()
  const { getBoard } = useBoardsDispatch()
  const { lists } = useListsState()
  const { getListsByBoardId: getLists } = useListsDispatch()
  const router = useRouter()
  const boardId = parseInt(router.query.id as string)
  const board: Board | undefined = findBoard(boards, boardId)

  useEffect(() => {
    const getBoardPromise = !board
      ? getBoard(boardId)
      : new Promise(() => undefined)
    const getListsPromise = !lists
      ? getLists(boardId)
      : new Promise(() => undefined)
    Promise.all([getBoardPromise, getListsPromise])
  }, [boardId])

  return {
    board,
  }
}
