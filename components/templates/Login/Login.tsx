// ===
// @modules
import { Heading, VStack } from '@chakra-ui/react'
import { GoogleLoginButton } from '../../molecules/GoogleLoginButton'

// ===
// @interface

// ===
// @view
export const Login: React.FC = () => {
  return (
    <VStack textAlign="center">
      <Heading mb={15}>ログイン</Heading>
      <GoogleLoginButton />
    </VStack>
  )
}
