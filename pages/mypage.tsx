// ===
// @modules
// ===
import { NextPage } from 'next'
import { useEffect } from 'react'
import { Profile } from '../components/templates/Profile'
import { useLogin } from '../lib/client/hooks/useLogin'
import { useMeDispatch, useMeState } from '../lib/client/state/me'
import { LoginLayout } from '../components/templates/LoginLayout/LoginLayout'
import { getMeRequest } from '../lib/client/requests/userRequest'

// ===
// @Component
// ===

const Mypage: NextPage = () => {
  const { currentUser, loading } = useLogin()
  const { user } = useMeState()
  const { updateMe } = useMeDispatch()

  useEffect(() => {
    getMeRequest().then(updateMe)
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
