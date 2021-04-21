// ===
// @modules
// ===
import { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Login as LoginTemplate } from '../components/templates/Login'
import { useFriendlyForwadingUrl } from '../lib/client/hooks/useFriendlyForwadingUrl'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Login: NextPage = () => {
  const [session, loading] = useSession()
  const router = useRouter()
  const callbackUrl = useFriendlyForwadingUrl()

  useEffect(() => {
    if (session) router.push('/')
  }, [session, loading])

  return <LoginTemplate callbackUrl={callbackUrl} />
}

// ===
// @export
// ===

export default Login
