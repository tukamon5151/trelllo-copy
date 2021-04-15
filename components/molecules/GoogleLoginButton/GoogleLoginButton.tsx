// ===
// @modules
import { Button, ButtonProps } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

// ===
// @interface

// ===
// @view
export const GoogleLoginButton: React.FC<ButtonProps> = ({
  left,
  ...other
}) => {
  return <Button leftIcon={<FcGoogle />} {...other}>
    Login with Google
  </Button>
}

// ===
// @styled
