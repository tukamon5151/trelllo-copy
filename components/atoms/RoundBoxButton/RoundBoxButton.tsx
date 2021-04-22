// ===
// @modules
import { forwardRef } from 'react'
import { Center, CenterProps } from '@chakra-ui/react'

// ===
// @interface
interface Props extends CenterProps {
  mode?: 'black' | 'white'
}

// ===
// @view
export const RoundBoxButton = forwardRef<HTMLDivElement, Props>(
  function RoundBoxButton({ mode = 'white', ...other }, ref) {
    return (
      <Center
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
