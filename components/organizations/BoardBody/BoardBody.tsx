// ===
// @modules
import { HStack, StackProps, Box } from '@chakra-ui/react'
import { useListsState } from '../../../lib/client/state/lists'
import {
  filterByBoardId,
  sortByPosition,
} from '../../../lib/client/selectors/list'
import { ListComponent } from '../ListComponent'
import { CreateListButton } from '../../molecules/CreateListButton'

// ===
// @interface

export interface Props extends StackProps {
  boardId: number
}

// ===
// @view
export const BoardBody: React.VFC<Props> = ({ boardId, ...other }) => {
  const lists = sortByPosition(filterByBoardId(useListsState().lists, boardId))

  return (
    <HStack spacing={2} p={2} align="start" overflowX="auto" {...other}>
      {lists.map((list, index) => (
        <ListComponent
          list={list}
          currentIndex={index}
          key={list.id}
          minW={60}
        />
      ))}
      <Box pr={2}>
        <CreateListButton boardId={boardId} minW={60} />
      </Box>
    </HStack>
  )
}
