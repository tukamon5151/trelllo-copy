// ===
// @modules
import { Button, ButtonProps } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/client'

// ===
// @interface

// ===
// @view
export const GoogleLoginButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<FcGoogle />}
      onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
    >
      Login with Google
    </Button>
  )
}

// ===
// @styled
