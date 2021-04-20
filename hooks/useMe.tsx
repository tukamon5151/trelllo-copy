import {
  useReducer,
  useCallback,
  useContext,
  createContext,
  Reducer,
} from 'react'
import { User } from '../model/client/User'

export type State = {
  user: User
}

type Action =
  | {
      type: 'get'
    }
  | {
      type: 'update'
      payload: { user: User }
    }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, user: action.payload.user }
  }
}

const createInitialState = (initialState?: Partial<State>) => ({
  user: undefined,
  ...initialState,
})

export const useMeCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const updateMe: (user: User) => void = useCallback(
    (user: User) => dispatch({ type: 'update', payload: { user } }),
    [dispatch],
  )

  return {
    state,
    dispatchers: {
      updateMe,
    },
  }
}

type Dispatchers = TypeUtil.Dispatchers<typeof useMeCore>

const MeStateContext = createContext<State>(undefined)
export const MeStateProvider = MeStateContext.Provider
export const useMeState = (): State => useContext(MeStateContext)
const MeDispatchContext = createContext<Dispatchers>(undefined)
export const MeDispatchProvider = MeDispatchContext.Provider
export const useMeDispatch = (): Dispatchers => useContext(MeDispatchContext)
