import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { List } from '../../../model/client/List'
import { CreateList, UpdateList } from '../../../dto/list'
import {
  createListRequest,
  getListsRequest,
  updateListRequest,
} from '../requests/listRequest'
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
  | {
      type: 'updateList'
      payload: { list: List }
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
    case 'updateList': {
      const lists = state.lists.map((list) =>
        list.id === action.payload.list.id ? action.payload.list : list,
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

  const updateList = useCallback(
    async (dto: UpdateList) => {
      const list = await updateListRequest(dto)
      dispatch({ type: 'updateList', payload: { list } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      createList,
      getListsByBoardId,
      updateList,
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
