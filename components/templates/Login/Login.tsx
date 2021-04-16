// ===
// @modules
import { Heading, VStack } from '@chakra-ui/react'
import { GoogleLoginButton } from '../../molecules/GoogleLoginButton'
import { useCallbackUrl } from '../../../hooks/useCallbackUrl'

// ===
// @interface

// ===
// @view
export const Login: React.FC = () => {
  const callbackUrl = useCallbackUrl()

  return (
    <VStack textAlign="center">
      <Heading mb={15}>ログイン</Heading>
      <GoogleLoginButton callbackUrl={callbackUrl} />
    </VStack>
  )
}
