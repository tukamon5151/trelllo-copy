// ===
// @modules
import { Flex, FlexProps, Icon, Text, As } from '@chakra-ui/react'

// ===
// @interface

export interface Props extends FlexProps {
  isActive?: boolean
  icon: As
  text: string
}

// ===
// @view
export const SidebarItem: React.FC<Props> = ({
  isActive = false,
  icon,
  text,
  ...other
}) => {
  return (
    <Flex
      alignItems="center"
      p={1}
      borderRadius={3}
      background={isActive ? 'blue.100' : 'white'}
      w="100%"
      fontWeight="bold"
      color={isActive ? 'blue.700' : 'black'}
      _hover={{
        background: 'gray.100',
      }}
      {...other}
    >
      <Icon as={icon} mr={2} />
      <Text>{text}</Text>
    </Flex>
  )
}
