import { useListUseCases } from '../../../lib/client/useCases/list'

export const useListMenuInitial = (listId: number) => {
  const { archiveList } = useListUseCases()

  return {
    archiveList: () => archiveList(listId),
  }
}
