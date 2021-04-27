import { useListUseCases } from '../../../lib/client/useCases/list'

export const useListMenuInitialBody = (listId: number) => {
  const { archiveList } = useListUseCases()

  return {
    archiveList: () => archiveList(listId),
  }
}
