// ===
// @modules
import { HStack, Button, Box } from '@chakra-ui/react'
import {
  useListsDispatch,
  useListsState,
} from '../../../lib/client/hooks/useLists'
import { filterByBoardId } from '../../../lib/client/selectors/list'

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
    <HStack spacing={2}>
      {lists.map((list) => (
        <Box key={list.id}>{list.name}</Box>
      ))}
      <Button onClick={() => createList({ name: 'hoge', boardId })}>
        +もう一つのリストを追加
      </Button>
    </HStack>
  )
}
