import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Board } from '../model/client/Bard'
import { CreateBoard } from '../dto/board'
import { createBoard as createBoardRequest } from '../lib/client/boardRequest'

export type State = {
  boards: Board[]
  isCreating: boolean
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
  | {
      type: 'startCreate'
    }
  | {
      type: 'endCreate'
    }

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'create':
      return { ...state, boards: [action.payload.board, ...state.boards] }
    case 'updateBoards':
      return { ...state, boards: action.payload.boards }
    case 'startCreate':
      return { ...state, isCreating: true }
    case 'endCreate':
      return { ...state, isCreating: false }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>): State => ({
  boards: undefined,
  isCreating: false,
  ...initialState,
})

export const useBoardsCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const createBoard = useCallback(
    async (boardDto: CreateBoard): Promise<void> => {
      const board = await createBoardRequest(boardDto)
      dispatch({ type: 'create', payload: { board } })
      dispatch({ type: 'endCreate' })
    },
    [dispatch],
  )

  const initBoards = useCallback(
    (boards: Board[]): void =>
      dispatch({ type: 'updateBoards', payload: { boards } }),
    [dispatch],
  )

  const startCreateBoard = useCallback(
    () => dispatch({ type: 'startCreate' }),
    [dispatch],
  )

  const endCreateBoard = useCallback(() => dispatch({ type: 'endCreate' }), [
    dispatch,
  ])

  return {
    state,
    dispatchers: {
      createBoard,
      initBoards,
      startCreateBoard,
      endCreateBoard
    },
  }
}

type Dispatchers = TypeUtil.Dispatchers<typeof useBoardsCore>

const BoardsStateContext = createContext<State>(undefined)
export const BoardsStateProvider = BoardsStateContext.Provider
export const useBoardsState = (): State => useContext(BoardsStateContext)
const BoardsDispatchContext = createContext<Dispatchers>(undefined)
export const BoardsDispatchProvider = BoardsDispatchContext.Provider
export const useBoardsDispatch = (): Dispatchers =>
  useContext(BoardsDispatchContext)
