// ===
// @modules
import { Flex, Spacer, FlexProps, HStack } from '@chakra-ui/react'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'
import { Board } from '../../../model/client/Bard'
import { BoardStar } from '../../atoms/BoardStar'
import { useBoardsDispatch } from '../../../lib/client/hooks/useBoards'
import { BoardTitleInput } from '../../atoms/BoardTitleInput'

// ===
// @interface

export interface Props extends FlexProps {
  board: Board
}

// ===
// @view
export const BoardHeader: React.VFC<Props> = ({ board, ...other }) => {
  const { addStar, removeStar } = useBoardsDispatch()
  return (
    <Flex {...other}>
      <HStack>
        <BoardTitleInput
          mr={2}
          fontSize="lg"
          title={board.title}
          onBlur={async (value) => {
            return { id: 1, title: 'hogehoge', color: 'green' } as Board
          }}
        />
        <RoundSquareButton size={8} mode="black">
          <BoardStar
            w={8}
            isStar={board.star}
            onAdd={() => addStar(board.id)}
            onRemove={() => removeStar(board.id)}
          />
        </RoundSquareButton>
      </HStack>
      <Spacer />
      <RoundBoxButton h={8} mode="black">
        ...ボードメニューの表示
      </RoundBoxButton>
    </Flex>
  )
}
