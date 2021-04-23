// ===
// @modules
import {
  Box,
  Flex,
  Heading,
  BoxProps,
} from '@chakra-ui/react'
import { List } from '../../../model/client/List'
import { ListMenuPopover } from '../../molecules/ListMenuPopover/ListMenuPopover'

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
        <ListMenuPopover listId={list.id} />
      </Flex>
    </Box>
  )
}
