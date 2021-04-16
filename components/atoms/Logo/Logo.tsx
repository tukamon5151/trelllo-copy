// ===
// @modules
import { Box, BoxProps } from '@chakra-ui/react'

// ===
// @interface

// ===
// @view
export const Logo: React.FC<BoxProps> = (props) => {
  return (
    <Box
      w={20}
      height={4}
      my={2}
      backgroundImage="url(https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif)"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="50%"
      {...props}
    />
  )
}

// ===
// @styled
