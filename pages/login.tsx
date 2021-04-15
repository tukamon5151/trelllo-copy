// ===
// @modules
// ===
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Login: React.FC = () => {
  const [session, loading] = useSession()

  useEffect(() => {
    if (session) useRouter().push('/')
  }, [session, loading])

  return <div>ログインページだよ</div>
}

// ===
// @export
// ===

export default Login
