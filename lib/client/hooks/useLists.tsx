import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { List } from '../../../model/client/List'
import { CreateList } from '../../../dto/list'
import { createListRequest, getListsRequest } from '../requests/listRequest'
import { refreshByBoardId } from '../selectors/list'

export type State = {
  lists: List[]
}

type Action =
  | {
      type: 'addList'
      payload: { list: List }
    }
  | {
      type: 'updateListsByBoardId'
      payload: { boardId: number; lists: List[] }
    }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addList':
      return { lists: [...state.lists, action.payload.list] }
    case 'updateListsByBoardId': {
      const lists = refreshByBoardId(
        state.lists,
        action.payload.lists,
        action.payload.boardId,
      )
      return { lists }
    }
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

  const getListsByBoardId = useCallback(
    async (boardId: number) => {
      const lists = await getListsRequest(boardId)
      dispatch({ type: 'updateListsByBoardId', payload: { boardId, lists } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      createList,
      getListsByBoardId,
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
