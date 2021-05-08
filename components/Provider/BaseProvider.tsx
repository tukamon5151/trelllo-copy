// ===
// @modules
import {
  BoardsStateProvider,
  useBoardsCore,
  State as BoardsState,
} from '../../lib/client/state/boards'
import {
  BoardUseCaseProvider,
  createBoardUseCases,
} from '../../lib/client/useCases/board'
import {
  ListsStateProvider,
  useListsCore,
  State as ListsState,
} from '../../lib/client/state/lists'
import {
  ListUseCasesProvider,
  createListUseCases,
} from '../../lib/client/useCases/list'
import {
  CardsStateProvider,
  useCardsCore,
  State as CardsState,
} from '../../lib/client/state/card'
import {
  CardUseCasesProvider,
  createCardUseCase,
} from '../../lib/client/useCases/card'
import { MeProviderContainer } from './MeProviderContainer'

// ===
// @interface
type Props = {
  children: React.ReactNode
  initialState: {
    boardsState?: Partial<BoardsState>
    listsState?: Partial<ListsState>
    cardsState?: Partial<CardsState>
  }
}

// ===
// @view
export const BaseProvider: React.VFC<Props> = ({ children, initialState }) => {
  const { state: boardsState, dispatchers: boardsDispatchers } = useBoardsCore(
    initialState?.boardsState,
  )
  const { state: listsState, dispatchers: listsDispatchers } = useListsCore(
    initialState?.listsState,
  )
  const { state: cardsState, dispatchers: cardsDispatchers } = useCardsCore(
    initialState?.cardsState,
  )
  return (
    <MeProviderContainer>
      <BoardsStateProvider value={boardsState}>
        <BoardUseCaseProvider
          value={createBoardUseCases({
            ...boardsDispatchers,
            updateLists: listsDispatchers.updateLists,
            updateCards: cardsDispatchers.updateCards,
          })}
        >
          <ListsStateProvider value={listsState}>
            <ListUseCasesProvider value={createListUseCases(listsDispatchers)}>
              <CardsStateProvider value={cardsState}>
                <CardUseCasesProvider
                  value={createCardUseCase(cardsDispatchers)}
                >
                  {children}
                </CardUseCasesProvider>
              </CardsStateProvider>
            </ListUseCasesProvider>
          </ListsStateProvider>
        </BoardUseCaseProvider>
      </BoardsStateProvider>
    </MeProviderContainer>
  )
}
