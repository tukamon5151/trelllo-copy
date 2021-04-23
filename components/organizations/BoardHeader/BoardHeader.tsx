// ===
// @modules
import { Flex, Spacer, FlexProps } from '@chakra-ui/react'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'
import { Board } from '../../../model/client/Bard'
import { BoardStar } from '../../atoms/BoardStar'
import { useBoardsDispatch } from '../../../lib/client/hooks/useBoards'
import { BoardTitleInput } from '../../atoms/BoardTitleInput'
import { NotEmptyString } from '../../../lib/isNotEmptyString'

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
  const updateTitle = <T extends string>(title: NotEmptyString<T>) =>
    updateBoard({ id: board.id, title })
  const baseColor = board.image ? 'black' : 'white'

  return (
    <Flex p={2} alignItems="center" {...other}>
      <BoardTitleInput
        mr={2}
        title={board.title}
        mode={baseColor}
        updateTitle={updateTitle}
      />
      <RoundSquareButton
        size={9}
        mode={baseColor}
        onClick={board.star ? onRemoveStar : onAddStar}
      >
        <BoardStar iconWidth={8} isStar={board.star} />
      </RoundSquareButton>
      <Spacer />
      <RoundBoxButton h={8} mode={baseColor}>
        ...ボードメニューの表示
      </RoundBoxButton>
    </Flex>
  )
}
