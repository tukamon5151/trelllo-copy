// ===
// @modules
import { MeStateProvider, useMeCore, State } from '../../lib/client/state/me'
import {
  MeUseCaseProvider,
  createMeUseCases,
} from '../../lib/client/useCases/me'

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
  const useCases = createMeUseCases(dispatchers)
  return (
    <MeStateProvider value={state}>
      <MeUseCaseProvider value={useCases}>{children}</MeUseCaseProvider>
    </MeStateProvider>
  )
}
