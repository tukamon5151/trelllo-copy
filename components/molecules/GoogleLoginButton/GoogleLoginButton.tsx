// ===
// @modules
import { Button, ButtonProps } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

// ===
// @interface

// ===
// @view
export const GoogleLoginButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} leftIcon={<FcGoogle />}>
      Login with Google
    </Button>
  )
}

// ===
// @styled
