// ===
// @modules
// ===
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLogin } from '../../lib/client/hooks/useLogin'
import { LoginLayout } from '../../components/templates/LoginLayout/LoginLayout'
import {
  useBoardsDispatch,
  useBoardsState,
} from '../../lib/client/hooks/useBoards'
import { findBoard } from '../../lib/client/selectors/board'
import { BoardShow } from '../../components/templates/BoardShow'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Board: NextPage = () => {
  const { boards } = useBoardsState()
  const { getBoard } = useBoardsDispatch()
  const router = useRouter()
  const id = parseInt(router.query.id as string)
  const board = findBoard(boards, id)

  useEffect(() => {
    if (id && !board) getBoard(id)
  }, [id])

  return (
    <LoginLayout {...useLogin()}>
      <BoardShow board={board} />
    </LoginLayout>
  )
}

// ===
// @export
// ===
export default Board
