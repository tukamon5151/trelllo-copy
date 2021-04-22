// ===
// @modules
// ===
import { NextPage } from 'next'
import { useLogin } from '../../../lib/client/hooks/useLogin'
import { LoginLayout } from '../../../components/templates/LoginLayout/LoginLayout'
import { BoardShow } from '../../../components/templates/BoardShow'
import { useBoardShow } from './useBoardShow'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Board: NextPage = () => {
  return (
    <LoginLayout {...useLogin()}>
      <BoardShow {...useBoardShow()} />
    </LoginLayout>
  )
}

// ===
// @export
// ===
export default Board
