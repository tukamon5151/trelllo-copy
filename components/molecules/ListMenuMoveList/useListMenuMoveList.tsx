import { ChangeEventHandler, useState } from 'react'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { useListsState } from '../../../lib/client/state/lists'
import { useSortable } from '../../../lib/client/hooks/useSortable'

export const useListMenuMoveList = (listId: number, currentIndex: number) => {
  const [index, setIndex] = useState<number>(currentIndex)
  const { lists } = useListsState()
  const { moveList } = useListUseCases()
  const { getPosition } = useSortable(lists)

  const onSubmit = async () => {
    const position = getPosition(index)
    if (!position) return
    await moveList(listId, position)
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
