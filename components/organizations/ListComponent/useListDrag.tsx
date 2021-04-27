import { useEffect, useRef, useState } from 'react'
import { BoxDelta } from 'framer-motion'
import { useBoardBody } from '../BoardBody/useBoardBody'
import { useSortable } from '../../../lib/client/hooks/useSortable'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { List } from '../../../model/client/List'

type Props = {
  list: List
  currentIndex: number
}

export const useListDrag = ({ currentIndex, list }: Props) => {
  const ref = useRef<HTMLElement>(null)
  const [isDragging, setDragging] = useState<boolean>(false)
  const { positions, lists, setPosition } = useBoardBody()
  const { getPosition } = useSortable(lists)
  const { moveList, updateListPosition } = useListUseCases()

  useEffect(() => {
    if (!ref?.current) return
    setPosition(currentIndex, {
      left: ref.current.offsetLeft,
      width: ref.current.offsetWidth,
    })
  }, [currentIndex, ref])

  const onDragStart = () => setDragging(true)
  const onDragEnd = async () => {
    await updateListPosition(list.id, list.position)
    setDragging(false)
  }

  const onViewportBoxUpdate = (_, delta: BoxDelta) => {
    if (!isDragging) return
    const targetIndex = findIndex(delta.x.translate)
    if (targetIndex === undefined || targetIndex === currentIndex) return
    const position = getPosition(targetIndex, currentIndex)
    if (!position) return
    moveList(list, position)
  }

  const findIndex = (dragOffset: number) => {
    const current = positions[currentIndex]
    if (!current) return
    const { left, width } = current
    const right = left + width

    if (dragOffset > 0) {
      const next = positions[currentIndex + 1]
      if (!next) return currentIndex
      const { left: nextLeft, width: nextWidth } = next
      const swapOffset = nextLeft + nextWidth / 2 - right
      if (dragOffset > swapOffset) return currentIndex + 1
    }

    if (dragOffset < 0) {
      const prev = positions[currentIndex - 1]
      if (!prev) return currentIndex
      const { left: prevLeft, width: prevWidth } = prev
      const swapOffset = left - (prevLeft + prevWidth / 2)
      if (-dragOffset > swapOffset) return currentIndex - 1
    }

    return currentIndex
  }
  return {
    ref,
    onDragStart,
    onDragEnd,
    onViewportBoxUpdate,
  }
}
