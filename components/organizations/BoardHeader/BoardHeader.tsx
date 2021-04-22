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
  const { addStar, removeStar, updateBoard } = useBoardsDispatch()
  const onAddStar = () => addStar(board.id)
  const onRemoveStar = () => removeStar(board.id)
  const baseColor = board.image ? 'black' : 'white'
  return (
    <Flex {...other}>
      <HStack>
        <BoardTitleInput
          mr={2}
          fontSize="lg"
          board={board}
          onBlur={updateBoard}
          mode={baseColor}
        />
        <RoundSquareButton
          size={8}
          mode={baseColor}
          onClick={board.star ? onRemoveStar : onAddStar}
        >
          <BoardStar iconWidth={8} isStar={board.star} />
        </RoundSquareButton>
      </HStack>
      <Spacer />
      <RoundBoxButton h={8} mode={baseColor}>
        ...ボードメニューの表示
      </RoundBoxButton>
    </Flex>
  )
}
