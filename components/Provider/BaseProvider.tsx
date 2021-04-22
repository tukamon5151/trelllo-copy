// ===
// @modules
import { BoardsProviderContainer } from './BoardProviderContainer'
import { MeProviderContainer } from './MeProviderContainer'
import { ListsProviderContainer } from './ListsProviderContainer'

// ===
// @interface
type Props = {
  children: React.ReactNode
}

// ===
// @view
export const BaseProvider: React.VFC<Props> = ({ children }) => {
  return (
    <ListsProviderContainer>
      <BoardsProviderContainer>
        <MeProviderContainer>{children}</MeProviderContainer>
      </BoardsProviderContainer>
    </ListsProviderContainer>
  )
}
