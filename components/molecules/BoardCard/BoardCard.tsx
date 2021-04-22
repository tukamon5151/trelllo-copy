// ===
// @modules
import { forwardRef } from 'react'
import {
  AspectRatio,
  Text,
  Box,
  Link,
  LinkBoxProps,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'
import { useBoardsDispatch } from '../../../lib/client/hooks/useBoards'
import { BoardStar } from '../../atoms/BoardStar'

// ===
// @interface

export type Props = {
  board: Board
  href?: string
} & LinkBoxProps

// ===
// @view
export const BoardCard = forwardRef<HTMLAnchorElement, Props>(
  function BoardCard({ href, board, ...other }, ref) {
    const { addStar, removeStar } = useBoardsDispatch()
    const onAddStar: React.MouseEventHandler = (e) => {
      e.preventDefault()
      addStar(board.id)
    }
    const onRemoveStar: React.MouseEventHandler = (e) => {
      e.preventDefault()
      removeStar(board.id)
    }

    return (
      <LinkBox {...other}>
        <AspectRatio ratio={16 / 9} overflow="hidden" borderRadius={3}>
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
            <LinkOverlay href={href} ref={ref}>
              <Text
                position="absolute"
                top={2}
                left={2}
                color="white"
                fontWeight="bold"
              >
                {board.title}
              </Text>
            </LinkOverlay>
            <Link
              position="absolute"
              bottom={2}
              right={board.star ? 0 : -10}
              onClick={board.star ? onRemoveStar : onAddStar}
              zIndex={1}
              className={board.star ? '' : 'addStarIcon'}
            >
              <BoardStar
                isStar={board.star}
                transition="right 0.15s"
                iconWidth={8}
              />
            </Link>
          </Box>
        </AspectRatio>
      </LinkBox>
    )
  },
)
