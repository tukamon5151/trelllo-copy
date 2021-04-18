// ===
// @modules
// ===
import { useLogin } from '../hooks/useLogin'
import { useBoards } from '../hooks/useBoards'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'
import { Boards } from '../components/templates/Boards/Boards'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Bards: React.FC = () => {
  return (
    <LoginLayout {...useLogin()}>
      <Boards {...useBoards()} pt={10} />
    </LoginLayout>
  )
}

// ===
// @export
// ===

export default Bards
