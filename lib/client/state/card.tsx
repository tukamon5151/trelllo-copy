import {
  useReducer,
  Reducer,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Card } from '../../../model/client/Card'

export type State = {
  cards: Card[]
}

type Action =
  | {
      type: 'addCard'
      payload: { card: Card }
    }
  | {
      type: 'updateCards'
      payload: { cards: Card[] }
    }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addCard':
      return { cards: [...state.cards, action.payload.card] }
    case 'updateCards':
      return { cards: action.payload.cards }
    default:
      throw new Error()
  }
}

const createInitialState = (initialState?: Partial<State>): State => ({
  cards: [],
  ...initialState,
})

export const useCardsCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialState),
  )

  const addCard = useCallback(
    (card: Card) => {
      dispatch({ type: 'addCard', payload: { card } })
    },
    [dispatch],
  )

  const updateCards = useCallback((cards: Card[]) => {
    dispatch({ type: 'updateCards', payload: { cards } })
  }, [])

  return {
    state,
    dispatchers: {
      addCard,
      updateCards
    },
  }
}

export type Dispatchers = TypeUtil.Dispatchers<typeof useCardsCore>

const CardsStateContext = createContext<State>({ cards: [] })
export const CardsStateProvider = CardsStateContext.Provider
export const useCardsState = () => useContext<State>(CardsStateContext)
