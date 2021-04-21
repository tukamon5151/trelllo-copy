// ===
// @modules
import { Box, Portal } from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'

// ===
// @interface

export interface Props {
  board: Board
}

// ===
// @view
export const BoardBackground: React.VFC<Props> = ({ board }) => {
  return (
    <Portal>
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        bgColor={board.color}
        bgImage={board.image ? `url(${board.image})` : ''}
        bgSize="cover"
        bgPosition="50%"
        zIndex={-1}
      />
    </Portal>
  )
}
