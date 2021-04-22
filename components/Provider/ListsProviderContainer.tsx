import {
  State,
  useListsCore,
  ListsStateProvider,
  ListsDispatchProvider,
} from '../../lib/client/hooks/useLists'

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
  return (
    <ListsStateProvider value={state}>
      <ListsDispatchProvider value={dispatchers}>
        {children}
      </ListsDispatchProvider>
    </ListsStateProvider>
  )
}
