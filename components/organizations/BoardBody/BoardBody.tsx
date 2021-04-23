// ===
// @modules
import { HStack, StackProps, Box } from '@chakra-ui/react'
import {
  useListsDispatch,
  useListsState,
} from '../../../lib/client/hooks/useLists'
import { filterByBoardId } from '../../../lib/client/selectors/list'
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
  const lists = filterByBoardId(useListsState().lists, boardId)
  const { createList } = useListsDispatch()

  return (
    <HStack spacing={2} p={2} align="start" overflowX="auto" {...other}>
      {lists.map((list) => (
        <ListComponent list={list} key={list.id} minW={60} />
      ))}
      <Box pr={2}>
        <CreateListButton boardId={boardId} onSubmit={createList} minW={60} />
      </Box>
    </HStack>
  )
}
