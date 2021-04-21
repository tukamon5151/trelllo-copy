// ===
// @modules

// ===
// @interface
import { Spinner, Box, BoxProps } from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'

interface Props extends BoxProps{
  board?: Board
}

// ===
// @view
export const BoardShow: React.VFC<Props> = ({ board }) => {
  if (!board) return <Spinner />
  return (
    <Box>
      {JSON.stringify(board)}
    </Box>
  )
};