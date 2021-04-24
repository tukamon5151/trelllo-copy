// ===
// @modules
import {
  State,
  useBoardsCore,
  BoardsStateProvider,
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
  const useCases = createBoardUseCases(dispatchers)

  return (
    <BoardsStateProvider value={state}>
      <BoardUseCaseProvider value={useCases}>
        {children}
        <CreateBoardModal />
      </BoardUseCaseProvider>
    </BoardsStateProvider>
  )
}
