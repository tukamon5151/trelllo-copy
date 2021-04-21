// ===
// @modules
import { AspectRatio, Text, Box, AspectRatioProps } from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'
import { useBoardsDispatch } from '../../../lib/client/hooks/useBoards'
import { BoardStar } from '../../atoms/BoardStar'

// ===
// @interface

export interface Props extends AspectRatioProps {
  board: Board
}

// ===
// @view
export const BoardCard: React.FC<Props> = ({ board, ...other }) => {
  const { addStar, removeStar } = useBoardsDispatch()
  return (
    <AspectRatio ratio={16 / 9} overflow="hidden" borderRadius={3} {...other}>
      <Box
        position="relative"
        bgImage={board.image ? `url(${board.image})` : ''}
        bgColor={board.color ? board.color : ''}
        bgSize="cover"
        bgPosition="50%"
        cursor="pointer"
        _hover={{
          '> .boardBoxFade': {
            background: 'rgba(0,0,0,0.25)',
          },
          '.addStarIcon': {
            right: 2,
          },
        }}
      >
        <Box
          bgColor="rgba(0,0,0,0)"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          className="boardBoxFade"
        />
        <Text
          position="absolute"
          top={2}
          left={2}
          color="white"
          fontWeight="bold"
        >
          {board.title}
        </Text>
        <BoardStar
          isStar={board.star}
          position="absolute"
          bottom={2}
          right={2}
          onAdd={() => addStar(board.id)}
          onRemove={() => removeStar(board.id)}
        />
      </Box>
    </AspectRatio>
  )
}
