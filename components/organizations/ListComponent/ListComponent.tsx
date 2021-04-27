// ===
// @modules
import { Box, Flex, BoxProps } from '@chakra-ui/react'
import { List } from '../../../model/client/List'
import { ListMenuPopover } from '../ListMenuPopover'
import { Editable } from '../../atoms/Editable'
import { useListComponent } from './useListComponent'

// ===
// @interface

export interface Props extends BoxProps {
  list: List
  currentIndex: number
}

// ===
// @view
export const ListComponent: React.VFC<Props> = ({ list, currentIndex, ...other }) => {
  const { name, onSubmit, onChange } = useListComponent(list)

  return (
    <Box borderRadius={3} bg="gray.100" p={2} {...other}>
      <Flex alignItems="center">
        <Editable
          defaultValue={list.name}
          value={name}
          onSubmit={onSubmit}
          onChange={onChange}
          flex={1}
          size="sm"
          fontWeight="bold"
        />
        <ListMenuPopover listId={list.id} currentIndex={currentIndex} />
      </Flex>
    </Box>
  )
}
