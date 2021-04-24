import { Dispatchers } from '../hooks/useLists'
import { updateListRequest } from '../requests/listRequest'
import { UpdateList } from '../../../dto/list'
import { NotEmptyString } from '../../isNotEmptyString'
import { useContext, createContext } from 'react'

export const createListUseCases = (dispatchers: Dispatchers) => {
  const updateListTitle = async <T extends string>(
    listId: number,
    name: NotEmptyString<T>,
  ): Promise<void> => {
    const dto: UpdateList = { id: listId, name }
    const list = await updateListRequest(dto)
    dispatchers.updateList(list)
  }

  return {
    updateListTitle,
  }
}

type UseCaseFunctions = ReturnType<typeof createListUseCases>
const ListUseCasesContext = createContext<UseCaseFunctions>(
  {} as UseCaseFunctions,
)
export const ListUseCasesProvider = ListUseCasesContext.Provider
export const useListUseCases = () =>
  useContext<UseCaseFunctions>(ListUseCasesContext)
