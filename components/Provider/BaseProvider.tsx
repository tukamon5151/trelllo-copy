// ===
// @modules
import { BoardsProviderContainer } from './BoardProviderContainer'
import { MeProviderContainer } from './MeProviderContainer'
import { ListsProviderContainer } from './ListsProviderContainer'
import { CardProviderContainer } from './CardProviderContainer'

// ===
// @interface
type Props = {
  children: React.ReactNode
}

// ===
// @view
export const BaseProvider: React.VFC<Props> = ({ children }) => {
  return (
    <CardProviderContainer>
      <ListsProviderContainer>
        <BoardsProviderContainer>
          <MeProviderContainer>{children}</MeProviderContainer>
        </BoardsProviderContainer>
      </ListsProviderContainer>
    </CardProviderContainer>
  )
}
