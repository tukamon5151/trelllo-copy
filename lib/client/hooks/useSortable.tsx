type Sortable = {
  position: number
}

const MIN_POSITION = 0
const PER_POSITION = 65536
const INITIAL_POSITION = PER_POSITION - 1

const sortByPosition = (list: Sortable[]) =>
  list.sort((a, b) => a.position - b.position)

export const useSortable = <T extends Sortable>(list: T[]) => {
  const sortedList = sortByPosition(list)
  const isEmpty = () => sortedList.length === 0
  const isDisabled = () => sortedList.length <= 1
  const getPrev = (newIndex: number, currentIndex: number) =>
    currentIndex >= newIndex ? sortedList[newIndex - 1] : sortedList[newIndex]
  const getNext = (newIndex: number, currentIndex: number) =>
    currentIndex > newIndex ? sortedList[newIndex] : sortedList[newIndex + 1]
  const getFirst = () => sortedList[0]
  const getLast = () => sortedList[sortedList.length - 1]
  const getPosition = (newIndex: number, currentIndex: number) => {
    if (isDisabled()) return
    const prev = getPrev(newIndex, currentIndex)
    const next = getNext(newIndex, currentIndex)
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
