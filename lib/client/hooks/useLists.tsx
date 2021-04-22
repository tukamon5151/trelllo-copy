import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { List } from '../../../model/client/List'
import { CreateList } from '../../../dto/list'
import { createListRequest } from '../requests/listRequest'

export type State = {
  lists: List[]
}

type Action = {
  type: 'addList'
  payload: { list: List }
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addList':
      return { lists: [...state.lists, action.payload.list] }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>): State => ({
  lists: [],
  ...initialState,
})

export const useListsCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const createList = useCallback(
    async (listDto: CreateList) => {
      const list = await createListRequest(listDto)
      dispatch({ type: 'addList', payload: { list } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      createList,
    },
  }
}

type Dispatchers = TypeUtil.Dispatchers<typeof useListsCore>

const ListsStateContext = createContext<State>({ lists: [] })
export const ListsStateProvider = ListsStateContext.Provider
export const useListsState = () => useContext<State>(ListsStateContext)
const ListsDispatchContext = createContext<Dispatchers>({} as Dispatchers)
export const ListsDispatchProvider = ListsDispatchContext.Provider
export const useListsDispatch = () =>
  useContext<Dispatchers>(ListsDispatchContext)
