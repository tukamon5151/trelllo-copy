// ===
// @modules
import { Heading, VStack } from '@chakra-ui/react'
import { GoogleLoginButton } from '../../molecules/GoogleLoginButton'

// ===
// @interface
interface Props {
  callbackUrl?: string
}

// ===
// @view
export const Login: React.FC<Props> = ({ callbackUrl }) => {
  return (
    <VStack textAlign="center">
      <Heading mb={15}>ログイン</Heading>
      <GoogleLoginButton callbackUrl={callbackUrl} />
    </VStack>
  )
}
