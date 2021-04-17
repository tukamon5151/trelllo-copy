// ===
// @modules
// ===
import { NextPage } from 'next'
import { Profile } from '../components/templates/Profile'
import { useLogin } from '../hooks/useLogin'
import { useUser } from '../hooks/useUser'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'

// ===
// @Component
// ===

const Mypage: NextPage = () => {
  const { currentUser, loading } = useLogin()
  const { user, setUser } = useUser(currentUser?.id)
  return (
    <LoginLayout currentUser={currentUser} loading={loading}>
      <Profile user={user} setUser={setUser} />
    </LoginLayout>
  )
}

// ===
// @export
// ===

export default Mypage
