// ===
// @modules
import { Center, CenterProps } from '@chakra-ui/react'

// ===
// @interface

// ===
// @view
export const RoundBoxButton: React.FC<CenterProps> = (props) => {
  return (
    <Center
      borderRadius={2}
      bg="hsla(0,0%,100%,.3)"
      color="white"
      fontWeight="bold"
      _hover={{
        background: 'hsla(0,0%,100%,.2)',
      }}
      {...props}
    />
  )
}

// ===
// @styled
