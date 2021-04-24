// ===
// @modules
// ===
import { NextPage } from 'next'
import { useEffect } from 'react'
import { Profile } from '../components/templates/Profile'
import { useLogin } from '../lib/client/hooks/useLogin'
import { useMeState } from '../lib/client/state/me'
import { useMeUseCases } from '../lib/client/useCases/me'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'

// ===
// @Component
// ===

const Mypage: NextPage = () => {
  const { currentUser, loading } = useLogin()
  const { user } = useMeState()
  const { getInitMe } = useMeUseCases()

  useEffect(() => {
    getInitMe()
  }, [])
  return (
    <LoginLayout currentUser={currentUser} loading={loading}>
      <Profile user={user} />
    </LoginLayout>
  )
}

// ===
// @export
// ===

export default Mypage
