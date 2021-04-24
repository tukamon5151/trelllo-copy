// ===
// @modules
// ===
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useLogin } from '../../lib/client/hooks/useLogin'
import { useBoardsState } from '../../lib/client/state/boards'
import { LoginLayout } from '../../components/templates/LoginLayout/LoginLayout'
import { Boards } from '../../components/templates/Boards/Boards'
import { useBoardUseCases } from '../../lib/client/useCases/board'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Bards: NextPage = () => {
  const { boards } = useBoardsState()
  const { getInitialBoards } = useBoardUseCases()
  useEffect(() => {
    getInitialBoards()
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
