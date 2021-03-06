import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { List } from '../../../model/client/List'
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
      type: 'updateLists'
      payload: { lists: List[] }
    }
  | {
      type: 'updateList'
      payload: { list: List }
    }
  | {
      type: 'deleteList'
      payload: { id: number }
    }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addList':
      return { lists: [...state.lists, action.payload.list] }
    case 'updateLists': {
      return { lists: action.payload.lists }
    }
    case 'updateList': {
      const lists = state.lists.map((list) =>
        list.id === action.payload.list.id ? action.payload.list : list,
      )
      return { lists }
    }
    case 'deleteList': {
      const lists = state.lists.filter((list) => list.id !== action.payload.id)
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

  const addList = useCallback(
    (list: List) => {
      dispatch({ type: 'addList', payload: { list } })
    },
    [dispatch],
  )

  const updateLists = useCallback(
    (lists: List[]) => {
      dispatch({ type: 'updateLists', payload: { lists } })
    },
    [dispatch],
  )

  const updateList = useCallback(
    (list: List) => dispatch({ type: 'updateList', payload: { list } }),
    [dispatch],
  )

  const deleteList = useCallback(
    (id: number) => {
      dispatch({ type: 'deleteList', payload: { id } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      addList,
      updateLists,
      deleteList,
      updateList,
    },
  }
}

export type Dispatchers = TypeUtil.Dispatchers<typeof useListsCore>

const ListsStateContext = createContext<State>({ lists: [] })
export const ListsStateProvider = ListsStateContext.Provider
export const useListsState = () => useContext<State>(ListsStateContext)
