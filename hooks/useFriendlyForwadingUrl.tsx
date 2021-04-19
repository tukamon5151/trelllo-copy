import { useRouter } from 'next/router'
import { getAbsoluteUrl } from '../lib/getAbsoluteUrl'

export const queryKey = 'callbackUrl'

export const useFriendlyForwadingUrl = (): string | undefined => {
  const router = useRouter()
  let callbackPath = router.query[queryKey]
  if (!callbackPath) return undefined
  if (callbackPath instanceof Array) callbackPath = callbackPath[0]
  return getAbsoluteUrl(callbackPath)
}
