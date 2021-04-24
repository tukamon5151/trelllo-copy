// ===
// @modules
import {
  State,
  useBoardsCore,
  BoardsStateProvider,
  BoardsDispatchProvider,
} from '../../lib/client/state/boards'
import { CreateBoardModal } from '../organizations/CreateBoardModal'
import {
  createBoardUseCases,
  BoardUseCaseProvider,
} from '../../lib/client/useCases/board'

// ===
// @interface

interface Props {
  children: React.ReactNode
  initialState?: Partial<State>
}

// ===
// @view
export const BoardsProviderContainer: React.VFC<Props> = ({
  initialState,
  children,
}) => {
  const { state, dispatchers } = useBoardsCore(initialState)
  const usecases = createBoardUseCases(dispatchers)

  return (
    <BoardsStateProvider value={state}>
      <BoardsDispatchProvider value={dispatchers}>
        <BoardUseCaseProvider value={usecases}>
          {children}
          <CreateBoardModal
            isOpen={state.isCreating}
            onClose={dispatchers.endCreateBoard}
          />
        </BoardUseCaseProvider>
      </BoardsDispatchProvider>
    </BoardsStateProvider>
  )
}
