import { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { queryKey as callbackPathKey } from './useCallbackUrl'

export interface User {
  id?: number | null
  name?: string | null
  email?: string | null
  image?: string | null
}

export const useUser = (): { user: User; loading: boolean } => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !session)
      router.push(`/login?${callbackPathKey}=${router.asPath}`)
  }, [session, loading])

  return {
    user: session?.user as User | undefined,
    loading,
  }
}
