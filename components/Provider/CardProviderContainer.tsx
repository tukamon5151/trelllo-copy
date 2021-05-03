import {
  CardsStateProvider,
  useCardsCore,
  State,
} from '../../lib/client/state/card'
import {
  createCardUseCase,
  CardUseCasesProvider,
} from '../../lib/client/useCases/card'

// ===
// @modules

// ===
// @interface

interface Props {
  initialState?: Partial<State>
  children: React.ReactNode
}

// ===
// @view
export const CardProviderContainer: React.VFC<Props> = ({
  children,
  initialState,
}) => {
  const { state, dispatchers } = useCardsCore(initialState)
  const useCases = createCardUseCase(dispatchers)
  return (
    <CardsStateProvider value={state}>
      <CardUseCasesProvider value={useCases}>{children}</CardUseCasesProvider>
    </CardsStateProvider>
  )
}
