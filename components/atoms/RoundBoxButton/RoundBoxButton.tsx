// ===
// @modules
import { Center, CenterProps } from '@chakra-ui/react'

// ===
// @interface
interface Props extends CenterProps {
  mode?: 'black' | 'white'
}

// ===
// @view
export const RoundBoxButton: React.FC<Props> = ({
  mode = 'white',
  ...other
}) => {
  return (
    <Center
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
