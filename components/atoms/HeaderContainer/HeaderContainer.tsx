// ===
// @modules
import { Flex, FlexProps } from '@chakra-ui/react'

// ===
// @interface

// ===
// @view
export const HeaderContainer: React.FC<FlexProps> = (props) => {
  return <Flex bg="blue.600" maxH={10} p={1} overflow="hidden" {...props} />
}

// ===
// @styled
