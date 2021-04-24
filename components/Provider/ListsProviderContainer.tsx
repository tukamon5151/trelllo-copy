import {
  State,
  useListsCore,
  ListsStateProvider,
  ListsDispatchProvider,
} from '../../lib/client/hooks/useLists'
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
  const useCaseFunctions = createListUseCases(dispatchers)
  return (
    <ListsStateProvider value={state}>
      <ListsDispatchProvider value={dispatchers}>
        <ListUseCasesProvider value={useCaseFunctions}>
          {children}
        </ListUseCasesProvider>
      </ListsDispatchProvider>
    </ListsStateProvider>
  )
}
