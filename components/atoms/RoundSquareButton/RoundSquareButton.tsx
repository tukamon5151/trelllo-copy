// ===
// @modules
import { Square, SquareProps } from '@chakra-ui/react'

// ===
// @interface

// ===
// @view
export const RoundSquareButton: React.FC<SquareProps> = (props) => {
  return (
    <Square
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
