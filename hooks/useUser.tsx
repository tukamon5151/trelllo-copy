import { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export interface User {
  id?: number | null
  name?: string | null
  email?: string | null
  image?: string | null
}

export const useUser = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !session) router.push('/login?force_login=true')
  }, [session, loading])

  return {
    user: session?.user as User | undefined,
    loading,
  }
}
