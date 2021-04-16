// ===
// @modules
// ===
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Login as LoginTemplate } from '../components/templates/Login'
import { useCallbackUrl } from '../hooks/useCallbackUrl'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Login: React.FC = () => {
  const [session, loading] = useSession()
  const router = useRouter()
  const callbackUrl = useCallbackUrl()

  useEffect(() => {
    if (session) router.push('/')
  }, [session, loading])

  return <LoginTemplate callbackUrl={callbackUrl} />
}

// ===
// @export
// ===

export default Login
