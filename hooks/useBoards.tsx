import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Board } from '../model/client/Bard'

export type State = {
  boards: Board[]
}

type Action =
  | {
      type: 'create'
      payload: { board: Board }
    }
  | {
      type: 'updateBoards'
      payload: { boards: Board[] }
    }

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'create':
      console.log(action.payload.board)
      return { boards: [...state.boards, action.payload.board] }
    case 'updateBoards':
      return { boards: action.payload.boards }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>): State => ({
  boards: undefined,
  ...initialState,
})

export const useBoardsCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const createBoard = useCallback(
    (board: Board) => dispatch({ type: 'create', payload: { board } }),
    [dispatch],
  )
  const updateBoards = useCallback(
    (boards: Board[]) =>
      dispatch({ type: 'updateBoards', payload: { boards } }),
    [dispatch],
  )

  return {
    state,
    actions: {
      createBoard,
      updateBoards,
    },
  }
}

const BoardsStateContext = createContext<State>(undefined)
export const BoardsStateProvider = BoardsStateContext.Provider
export const useBoardsState = () => useContext(BoardsStateContext)
const BoardsDispatchContext = createContext(undefined)
export const BoardsDispatchProvider = BoardsDispatchContext.Provider
export const useBoardsDispatch = () => useContext(BoardsDispatchContext)
