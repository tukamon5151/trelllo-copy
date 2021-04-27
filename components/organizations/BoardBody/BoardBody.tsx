// ===
// @modules
import { HStack, StackProps, Box } from '@chakra-ui/react'
import { ListComponent } from '../ListComponent'
import { CreateListButton } from '../../molecules/CreateListButton'
import { useBoardBodyCore, BoardBodyProvider } from './useBoardBody'

// ===
// @interface

export interface Props extends StackProps {
  boardId: number
}

// ===
// @view
export const BoardBody: React.VFC<Props> = ({ boardId, ...other }) => {
  const ContextValue = useBoardBodyCore({ boardId })
  const { lists } = ContextValue

  return (
    <BoardBodyProvider value={ContextValue}>
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
    </BoardBodyProvider>
  )
}
