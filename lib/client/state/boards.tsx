import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Board } from '../../../model/client/Bard'

export type State = {
  boards: Board[]
  isCreating: boolean
}

type Action =
  | {
      type: 'addBoard'
      payload: { board: Board }
    }
  | {
      type: 'updateBoards'
      payload: { boards: Board[] }
    }
  | {
      type: 'startCreate'
    }
  | {
      type: 'endCreate'
    }
  | {
      type: 'updateBoard'
      payload: { board: Board }
    }

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'addBoard':
      return {
        ...state,
        boards: [action.payload.board, ...state.boards],
        isCreating: false,
      }
    case 'updateBoards':
      return { ...state, boards: action.payload.boards }
    case 'startCreate':
      return { ...state, isCreating: true }
    case 'endCreate':
      return { ...state, isCreating: false }
    case 'updateBoard': {
      const boards = state.boards.map((board) => {
        return board.id === action.payload.board.id
          ? action.payload.board
          : board
      })
      return { ...state, boards }
    }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>): State => ({
  boards: [] as Board[],
  isCreating: false,
  ...initialState,
})

export const useBoardsCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const addBoard = useCallback(
    (board: Board) => {
      dispatch({ type: 'addBoard', payload: { board } })
    },
    [dispatch],
  )

  const updateBoards = useCallback(
    (boards: Board[]): void => {
      dispatch({ type: 'updateBoards', payload: { boards } })
    },
    [dispatch],
  )

  const startCreateBoard = useCallback(
    () => dispatch({ type: 'startCreate' }),
    [dispatch],
  )

  const endCreateBoard = useCallback(() => dispatch({ type: 'endCreate' }), [
    dispatch,
  ])

  const updateBoard = useCallback(
    (board: Board) => {
      dispatch({ type: 'updateBoard', payload: { board } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      addBoard,
      updateBoards,
      startCreateBoard,
      endCreateBoard,
      updateBoard,
    },
  }
}

export type Dispatchers = TypeUtil.Dispatchers<typeof useBoardsCore>

const BoardsStateContext = createContext<State>({
  boards: [],
  isCreating: false,
})
export const BoardsStateProvider = BoardsStateContext.Provider
export const useBoardsState = (): State => useContext(BoardsStateContext)
const BoardsDispatchContext = createContext<Dispatchers>({} as Dispatchers)
export const BoardsDispatchProvider = BoardsDispatchContext.Provider
export const useBoardsDispatch = (): Dispatchers =>
  useContext(BoardsDispatchContext)
