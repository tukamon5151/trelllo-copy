import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useBoardsState } from '../../../lib/client/state/boards'
import { useBoardUseCases } from '../../../lib/client/useCases/board'
import { findBoard } from '../../../lib/client/selectors/board'
import { Board } from '../../../model/client/Bard'

export const useBoardShow = () => {
  const { boards } = useBoardsState()
  const { initializeBoard } = useBoardUseCases()
  const router = useRouter()
  const boardId = parseInt(router.query.id as string)
  const board: Board | undefined = findBoard(boards, boardId)

  useEffect(() => {
    if (!boardId) return
    initializeBoard(boardId)
  }, [boardId])

  return {
    board,
  }
}
