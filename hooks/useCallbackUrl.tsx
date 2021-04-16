import { useRouter } from 'next/router'
import { getAbsoluteUrl } from '../lib/getAbsoluteUrl'

export const queryKey = 'callbackUrl'

export const useCallbackUrl = (): string => {
  const router = useRouter()
  let callbackPath = router.query[queryKey]
  if (!callbackPath) return getAbsoluteUrl('')

  callbackPath = callbackPath instanceof Array ? callbackPath[0] : callbackPath
  return getAbsoluteUrl(callbackPath)
}
