// ===
// @modules
// ===
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useLogin } from '../../lib/client/hooks/useLogin'
import {
  useBoardsDispatch,
  useBoardsState,
} from '../../lib/client/hooks/useBoards'
import { LoginLayout } from '../../components/templates/LoginLayout/LoginLayout'
import { Boards } from '../../components/templates/Boards/Boards'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Bards: NextPage = () => {
  const { boards } = useBoardsState()
  const { initBoards } = useBoardsDispatch()
  useEffect(() => {
    initBoards()
  }, [])

  return (
    <LoginLayout {...useLogin()}>
      <Boards boards={boards} pt={10} />
    </LoginLayout>
  )
}

// ===
// @export
// ===

export default Bards
