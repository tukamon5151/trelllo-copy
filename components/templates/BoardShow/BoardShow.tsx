// ===
// @modules

// ===
// @interface
import { Spinner, Box, BoxProps } from '@chakra-ui/react'
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
    <Box {...other}>
      <BoardHeader board={board} mb={3} />
      <BoardBody />
      <BoardBackground board={board} />
    </Box>
  )
}
