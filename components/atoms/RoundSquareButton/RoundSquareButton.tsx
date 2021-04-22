// ===
// @modules
import { forwardRef } from 'react'
import { Square, SquareProps } from '@chakra-ui/react'

// ===
// @interface
interface Props extends SquareProps {
  mode?: 'white' | 'black'
}

// ===
// @view
export const RoundSquareButton = forwardRef<HTMLDivElement, Props>(
  function RoundSquareButton({ mode = 'white', ...other }, ref) {
    return (
      <Square
        borderRadius={3}
        bg={`${mode}Alpha.400`}
        color="white"
        fontWeight="bold"
        p={1}
        cursor="pointer"
        ref={ref}
        _hover={{
          background: `${mode}Alpha.300`,
        }}
        {...other}
      />
    )
  },
)
