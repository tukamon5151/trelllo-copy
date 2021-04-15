// ===
// @modules
// ===
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Login as LoginTemplate } from '../components/templates/Login'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Login: React.FC = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) router.push('/')
  }, [session, loading])

  return <LoginTemplate />
}

// ===
// @export
// ===

export default Login
