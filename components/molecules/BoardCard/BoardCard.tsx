// ===
// @modules
import {
  AspectRatio,
  Text,
  Box,
  AspectRatioProps,
  Icon,
} from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { Board } from '../../../model/client/Bard'
import { useBoardsDispatch } from '../../../hooks/useBoards'

// ===
// @interface

export interface Props extends AspectRatioProps {
  board: Board
}

// ===
// @view
export const BoardCard: React.FC<Props> = ({ board, ...other }) => {
  const { addStar } = useBoardsDispatch()
  return (
    <AspectRatio ratio={16 / 9} overflow="hidden" borderRadius={3} {...other}>
      <Box
        position="relative"
        bgImage={board.image ? `url(${board.image})` : ''}
        bgColor={board.color ? board.color : ''}
        bgSize="cover"
        bgPosition="50%"
        cursor="pointer"
        w="100%"
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
        <Box>
          {board.star ? (
            <Icon
              as={AiOutlineStar}
              color="yellow"
              position="absolute"
              bottom={2}
              right={2}
              _hover={{
                transform: 'scale(1.1)',
              }}
            />
          ) : (
            <Icon
              as={AiOutlineStar}
              color="white"
              className="addStarIcon"
              position="absolute"
              bottom={2}
              right={-10}
              transitionProperty="right"
              transitionDuration=".15s"
              onClick={() => addStar(board.id)}
              _hover={{
                transform: 'scale(1.1)',
              }}
            />
          )}
        </Box>
      </Box>
    </AspectRatio>
  )
}
