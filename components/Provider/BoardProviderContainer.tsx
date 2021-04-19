// ===
// @modules
import {
  State,
  useBoardsCore,
  BoardsStateProvider,
  BoardsDispatchProvider,
} from '../../hooks/useBoards'
import { CreateBoardModal } from '../organizations/CreateBoardModal'

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
  return (
    <BoardsStateProvider value={state}>
      <BoardsDispatchProvider value={dispatchers}>
        {children}
        <CreateBoardModal
          isOpen={state.isCreating}
          onClose={dispatchers.endCreateBoard}
        />
      </BoardsDispatchProvider>
    </BoardsStateProvider>
  )
}
