// ===
// @modules
import { Flex, Spacer, FlexProps } from '@chakra-ui/react'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'
import { Board } from '../../../model/client/Bard'
import { BoardStar } from '../../atoms/BoardStar'
import { Editable } from '../../atoms/Editable'
import { useBoardHeader } from './useBoardHeder'

// ===
// @interface

export interface Props extends FlexProps {
  board: Board
}

// ===
// @view
export const BoardHeader: React.VFC<Props> = ({ board, ...other }) => {
  const {
    title,
    onClickStar,
    onSubmitTitle,
    onChangeTitle,
    mode,
  } = useBoardHeader(board)

  return (
    <Flex p={2} alignItems="center" {...other}>
      <RoundBoxButton color={mode} mode={mode} mr={2}>
        <Editable
          defaultValue={board.title}
          value={title}
          onChange={onChangeTitle}
          onSubmit={onSubmitTitle}
          colorScheme={`${mode}Alpha`}
        />
      </RoundBoxButton>
      <RoundSquareButton size={9} mode={mode} onClick={onClickStar}>
        <BoardStar iconWidth={8} isStar={board.star} />
      </RoundSquareButton>
      <Spacer />
      <RoundBoxButton h={8} mode={mode}>
        ...ボードメニューの表示
      </RoundBoxButton>
    </Flex>
  )
}
