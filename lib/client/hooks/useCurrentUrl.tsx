import { useRouter } from 'next/router'
import { getAbsoluteUrl } from '../../getAbsoluteUrl'

export const useCurrentUrl = (): string => {
  const router = useRouter()
  return getAbsoluteUrl(router.asPath)
}
