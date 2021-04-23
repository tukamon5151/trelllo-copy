// ===
// @modules

// ===
// @interface
import { Spinner, BoxProps, Flex, Portal } from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'
import { BoardHeader } from '../../organizations/BoardHeader/BoardHeader'
import { BoardBackground } from '../../atoms/BoardBackground'
import { BoardBody } from '../../organizations/BoardBody'

export interface Props extends BoxProps {
  board?: Board
}

// ===
// @view
export const BoardShow: React.VFC<Props> = ({ board, ...other }) => {
  if (!board) return <Spinner />
  return (
    <Flex flex={1} direction="column" overflowX="hidden" {...other}>
      <BoardHeader board={board} w="100%" mb={3} />
      <Flex position="relative" flex={1}>
        <BoardBody flex={1} boardId={board.id} />
      </Flex>
      <Portal>
        <BoardBackground board={board} />
      </Portal>
    </Flex>
  )
}
