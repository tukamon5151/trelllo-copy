// ===
// @modules
// ===
import { NextPage } from 'next'
import { Profile } from '../components/templates/Profile'
import { useLogin } from '../hooks/useLogin'
import { useMyPage } from '../hooks/useMyPage'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'

// ===
// @Component
// ===

const Mypage: NextPage = () => {
  const { currentUser, loading } = useLogin()
  const { user, setUser } = useMyPage(currentUser?.id)
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
