import {
  useReducer,
  useCallback,
  useContext,
  createContext,
  Reducer,
} from 'react'
import { User } from '../../../model/client/User'

export type State = {
  user: User
}

type Action = {
  type: 'update'
  payload: { user: User }
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, user: action.payload.user }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>) => ({
  user: {} as User,
  ...initialState,
})

export const useMeCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
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

export type Dispatchers = TypeUtil.Dispatchers<typeof useMeCore>

const MeStateContext = createContext<State>({} as State)
export const MeStateProvider = MeStateContext.Provider
export const useMeState = (): State => useContext(MeStateContext)
