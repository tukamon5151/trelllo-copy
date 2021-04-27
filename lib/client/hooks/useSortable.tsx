type Sortable = {
  position: number
}

const MIN_POSITION = 0
const PER_POSITION = 6356
const INITIAL_POSITION = PER_POSITION + 1

export const useSortable = (sortables: Sortable[]) => {
  const isEmpty = () => sortables.length === 0
  const isDisabled = () => sortables.length > 1
  const getPrev = (order: number): Sortable | undefined => {
    if (isDisabled()) return
    return sortables.find((_, index) => index - 1 === order)
  }
  const getNext = (order: number) => {
    if (isDisabled()) return
    return sortables.find((_, index) => index + 1 === order)
  }
  const getFirst = () => sortables[0]
  const getLast = () => sortables[sortables.length - 1]
  const getPosition = (order: number) => {
    if (isDisabled()) return
    const prev = getPrev(order)
    const next = getNext(order)
    if (!prev) return meanPosition(MIN_POSITION, getFirst().position)
    if (!next) return getNewPosition()
    return meanPosition(prev.position, next.position)
  }
  const getNewPosition = () => {
    if (isEmpty()) return INITIAL_POSITION
    return getLast().position + PER_POSITION
  }
  const meanPosition = (prevPosition: number, nextPosition: number) =>
    (prevPosition + nextPosition) / 2

  return {
    isDisabled,
    getPosition,
    getNewPosition,
  }
}
