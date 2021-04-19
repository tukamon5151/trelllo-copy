// ===
// @modules
import {
  State,
  useBoardsCore,
  BoardsStateProvider,
  BoardsDispatchProvider,
} from '../../hooks/useBoards'

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
  const { state, actions } = useBoardsCore(initialState)
  return (
    <BoardsStateProvider value={state}>
      <BoardsDispatchProvider value={actions}>
        {children}
      </BoardsDispatchProvider>
    </BoardsStateProvider>
  )
}
