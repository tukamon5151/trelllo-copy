// ===
// @modules
// ===
import { useEffect } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useBoardsDispatch, useBoardsState } from '../hooks/useBoards'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'
import { Boards } from '../components/templates/Boards/Boards'
import { getBoards } from '../lib/client/boardRequest'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Bards: React.FC = () => {
  const { boards } = useBoardsState()
  const { updateBoards } = useBoardsDispatch()
  useEffect(() => {
    getBoards().then(updateBoards)
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
