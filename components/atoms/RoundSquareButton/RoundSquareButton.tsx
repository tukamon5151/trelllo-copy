// ===
// @modules
import { Square, SquareProps } from '@chakra-ui/react'

// ===
// @interface
interface Props extends SquareProps {
  mode?: 'white' | 'black'
}

// ===
// @view
export const RoundSquareButton: React.FC<Props> = ({
  mode = 'white',
  ...other
}) => {
  return (
    <Square
      borderRadius={3}
      bg={`${mode}Alpha.400`}
      color="white"
      fontWeight="bold"
      p={1}
      cursor="pointer"
      _hover={{
        background: `${mode}Alpha.300`,
      }}
      {...other}
    />
  )
}

// ===
// @styled
