import {
  State,
  useListsCore,
  ListsStateProvider,
} from '../../lib/client/state/lists'
import {
  createListUseCases,
  ListUseCasesProvider,
} from '../../lib/client/useCases/list'

// ===
// @modules

// ===
// @interface

interface Props {
  children: React.ReactNode
  initialState?: Partial<State>
}

// ===
// @view
export const ListsProviderContainer: React.VFC<Props> = ({
  children,
  initialState,
}) => {
  const { state, dispatchers } = useListsCore(initialState)
  const useCases = createListUseCases(dispatchers)
  return (
    <ListsStateProvider value={state}>
      <ListUseCasesProvider value={useCases}>{children}</ListUseCasesProvider>
    </ListsStateProvider>
  )
}
