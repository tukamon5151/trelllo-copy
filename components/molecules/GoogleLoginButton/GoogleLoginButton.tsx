// ===
// @modules
import { Button, ButtonProps } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/client'

// ===
// @interface
interface Props extends ButtonProps {
  callbackUrl?: string
}

// ===
// @view
export const GoogleLoginButton: React.FC<Props> = ({
  callbackUrl,
  ...other
}) => {
  return (
    <Button
      {...other}
      leftIcon={<FcGoogle />}
      onClick={() => signIn('google', { callbackUrl })}
    >
      Login with Google
    </Button>
  )
}

// ===
// @styled
