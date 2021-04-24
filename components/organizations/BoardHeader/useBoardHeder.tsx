import { useState } from 'react'
import { useBoardsDispatch } from '../../../lib/client/state/boards'
import { NotEmptyString } from '../../../lib/isNotEmptyString'
import { Board } from '../../../model/client/Bard'

export const useBoardHeader = (board: Board) => {
  const [title, setTitle] = useState<string>(board.title)
  const { addStar, removeStar, updateBoard } = useBoardsDispatch()
  const onAddStar = () => addStar(board.id)
  const onRemoveStar = () => removeStar(board.id)
  const onClickStar = () => (board.star ? onRemoveStar : onAddStar)
  const onSubmitTitle = <T extends string>(title: NotEmptyString<T>) =>
    updateBoard({ id: board.id, title })

  const mode = board.image ? 'black' : 'white'

  return {
    title,
    onClickStar,
    onSubmitTitle,
    onChangeTitle: setTitle,
    mode,
  } as const
}
