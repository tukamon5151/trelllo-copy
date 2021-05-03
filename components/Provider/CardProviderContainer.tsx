import {
  CardsStateProvider,
  useCardsCore,
  State,
} from '../../lib/client/state/card'

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
  const { state } = useCardsCore(initialState)
  return <CardsStateProvider value={state}>{children}</CardsStateProvider>
}
