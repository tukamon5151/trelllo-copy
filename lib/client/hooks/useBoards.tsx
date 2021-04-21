import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Board } from '../../../model/client/Bard'
import { CreateBoard } from '../../../dto/board'
import {
  createBoardRequest,
  getBoardsRequest,
  getBoardRequest,
  addStarRequest,
  removeStarRequest,
} from '../requests/boardRequest'
import { findBoard } from '../selectors/board'

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
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    createInitialState(initialState),
  )

  const createBoard = useCallback(
    async (boardDto: CreateBoard): Promise<void> => {
      const board = await createBoardRequest(boardDto)
      dispatch({ type: 'addBoard', payload: { board } })
    },
    [dispatch],
  )

  const initBoards = useCallback(async (): Promise<void> => {
    const boards = await getBoardsRequest()
    dispatch({ type: 'updateBoards', payload: { boards } })
  }, [dispatch])

  const startCreateBoard = useCallback(
    () => dispatch({ type: 'startCreate' }),
    [dispatch],
  )

  const endCreateBoard = useCallback(() => dispatch({ type: 'endCreate' }), [
    dispatch,
  ])

  const addStar = useCallback(
    async (boardId: number) => {
      const board = await addStarRequest(boardId)
      dispatch({ type: 'updateBoard', payload: { board } })
    },
    [dispatch],
  )

  const removeStar = useCallback(
    async (boardId: number) => {
      const board = await removeStarRequest(boardId)
      dispatch({ type: 'updateBoard', payload: { board } })
    },
    [dispatch],
  )

  const getBoard = useCallback(
    async (boardId: number) => {
      const board = await getBoardRequest(boardId)
      findBoard(state.boards, board.id)
        ? dispatch({
            type: 'updateBoard',
            payload: { board },
          })
        : dispatch({ type: 'addBoard', payload: { board } })
    },
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      createBoard,
      initBoards,
      startCreateBoard,
      endCreateBoard,
      addStar,
      removeStar,
      getBoard,
    },
  }
}

type Dispatchers = TypeUtil.Dispatchers<typeof useBoardsCore>

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
