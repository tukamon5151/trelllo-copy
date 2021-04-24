// ===
// @modules
import {
  MeStateProvider,
  MeDispatchProvider,
  useMeCore,
  State,
} from '../../lib/client/state/me'

// ===
// @interface

interface Props {
  initialState?: Partial<State>
  children: React.ReactNode
}

// ===
// @view
export const MeProviderContainer: React.VFC<Props> = ({
  initialState,
  children,
}) => {
  const { state, dispatchers } = useMeCore(initialState)
  return (
    <MeStateProvider value={state}>
      <MeDispatchProvider value={dispatchers}>{children}</MeDispatchProvider>
    </MeStateProvider>
  )
}
