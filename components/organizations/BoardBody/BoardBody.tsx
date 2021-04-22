// ===
// @modules
import { HStack } from '@chakra-ui/react'
import {
  useListsDispatch,
  useListsState,
} from '../../../lib/client/hooks/useLists'
import { filterByBoardId } from '../../../lib/client/selectors/list'
import { ListComponent } from '../ListComponent'
import { CreateListButton } from '../../molecules/CreateListButton'

// ===
// @interface

export interface Props {
  boardId: number
}

// ===
// @view
export const BoardBody: React.VFC<Props> = ({ boardId }) => {
  const lists = filterByBoardId(useListsState().lists, boardId)
  const { createList } = useListsDispatch()

  return (
    <HStack spacing={2} p={2} align="start">
      {lists.map((list) => (
        <ListComponent list={list} key={list.id} w={60} />
      ))}
      <CreateListButton boardId={boardId} onSubmit={createList} w={60} />
    </HStack>
  )
}
