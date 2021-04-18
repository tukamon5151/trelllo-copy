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
import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'

// ===
// @interface

export interface Props extends AspectRatioProps {
  board: Board
}

// ===
// @view
export const BoardCard: React.FC<Props> = ({ board, ...other }) => {
  return (
    <AspectRatio
      ratio={16 / 9}
      overflow="hidden"
      borderRadius={3}
      w={40}
      {...other}
    >
      <Box
        position="relative"
        bgImage={board.image ? `url(${getAbsoluteUrl(board.image)})` : ''}
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
