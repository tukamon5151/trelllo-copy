import { ChangeEventHandler, useState } from 'react'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { useListsState } from '../../../lib/client/state/lists'
import { useSortable } from '../../../lib/client/hooks/useSortable'
import { useListMenu } from '../../organizations/ListMenuPopover/useListMenuCore'

export const useListMenuMoveList = () => {
  const { listId, onClose, currentIndex } = useListMenu()
  const [index, setIndex] = useState<number>(currentIndex)
  const { lists } = useListsState()
  const { updateListPosition } = useListUseCases()
  const { getPosition, isDisabled } = useSortable(lists)

  const onSubmit = async () => {
    await onMoveList()
    onClose()
  }

  const onMoveList = async () => {
    if (isDisabled()) return
    if (index === currentIndex) return
    const position = getPosition(index, currentIndex)
    if (!position) return
    await updateListPosition(listId, position)
  }

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setIndex(Number(e.target.value))
  }

  const range = (): number[] => [...Array(lists.length)].map((_, i) => i)

  return {
    onSubmit,
    index,
    onChange,
    range,
  }
}
