import { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { plainToClass } from 'class-transformer'
import { CurrentUser } from '../model/client/CurrentUser'
import { queryKey as callbackPathKey } from './useFriendlyForwadingUrl'

export const useLogin = (): {
  currentUser: CurrentUser
  loading: boolean
} => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !session)
      router.push(`/login?${callbackPathKey}=${router.asPath}`)
  }, [session, loading])

  const currentUser = session
    ? plainToClass(CurrentUser, session.user)
    : undefined

  return {
    currentUser,
    loading,
  }
}
