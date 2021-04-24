import { useState } from 'react'
import { NotEmptyString } from '../../../lib/isNotEmptyString'
import { Board } from '../../../model/client/Bard'
import { useBoardUseCases } from '../../../lib/client/useCases/board'

export const useBoardHeader = (board: Board) => {
  const [title, setTitle] = useState<string>(board.title)
  const { addBoardStar, removeBoardStar, updateBoardTitle } = useBoardUseCases()
  const onAddStar = () => addBoardStar(board.id)
  const onRemoveStar = () => removeBoardStar(board.id)
  const onClickStar = () => (board.star ? onRemoveStar : onAddStar)
  const onSubmitTitle = <T extends string>(title: NotEmptyString<T>) =>
    updateBoardTitle({ id: board.id, title })

  const mode = board.image ? 'black' : 'white'

  return {
    title,
    onClickStar,
    onSubmitTitle,
    onChangeTitle: setTitle,
    mode,
  } as const
}
