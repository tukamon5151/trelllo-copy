// ===
// @modules
import {
  MeStateProvider,
  MeDispatchProvider,
  useMeCore,
  State,
} from '../../hooks/useMe'

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
  const { state, actions } = useMeCore(initialState)
  return (
    <MeStateProvider value={state}>
      <MeDispatchProvider value={actions}>{children}</MeDispatchProvider>
    </MeStateProvider>
  )
}
