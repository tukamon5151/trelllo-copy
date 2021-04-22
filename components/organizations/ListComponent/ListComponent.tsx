// ===
// @modules
import { Box, Flex, Heading, Icon, BoxProps } from '@chakra-ui/react'
import { BiDotsHorizontal } from 'react-icons/bi'
import { List } from '../../../model/client/List'

// ===
// @interface

export interface Props extends BoxProps {
  list: List
}

// ===
// @view
export const ListComponent: React.VFC<Props> = ({ list, ...other }) => {
  return (
    <Box borderRadius={3} bg="gray.100" p={2} {...other}>
      <Flex alignItems="center">
        <Heading flex={1} size="sm">
          {list.name}
        </Heading>
        <Icon as={BiDotsHorizontal} w={8} color="gray.500" />
      </Flex>
    </Box>
  )
}
