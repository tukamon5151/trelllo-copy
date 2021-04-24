import { useContext, createContext } from 'react'
import { Dispatchers } from '../hooks/useLists'
import {
  updateListRequest,
  createListRequest,
  getListsRequest,
} from '../requests/listRequest'
import { CreateList, UpdateList } from '../../../dto/list'
import { NotEmptyString } from '../../isNotEmptyString'

export const createListUseCases = (dispatchers: Dispatchers) => {
  const createList = async (dto: CreateList) => {
    const list = await createListRequest(dto)
    dispatchers.addList(list)
  }

  const updateListTitle = async <T extends string>(
    listId: number,
    name: NotEmptyString<T>,
  ): Promise<void> => {
    const dto: UpdateList = { id: listId, name }
    const list = await updateListRequest(dto)
    dispatchers.updateList(list)
  }

  const archiveList = async (id: number) => {
    await updateListRequest({ id, closed: true })
    dispatchers.deleteList(id)
  }

  const getInitialLists = async (boardId: number) => {
    const lists = await getListsRequest({ boardId, closed: false })
    dispatchers.updateLists(lists, boardId)
  }

  return {
    updateListTitle,
    createList,
    archiveList,
    getInitialLists,
  }
}

type UseCaseFunctions = ReturnType<typeof createListUseCases>
const ListUseCasesContext = createContext<UseCaseFunctions>(
  {} as UseCaseFunctions,
)
export const ListUseCasesProvider = ListUseCasesContext.Provider
export const useListUseCases = () =>
  useContext<UseCaseFunctions>(ListUseCasesContext)
