// ===
// @modules
import { BoardsProviderContainer } from './BoardProviderContainer'
import { MeProviderContainer } from './MeProviderContainer'

// ===
// @interface

// ===
// @view
export const BaseProvider: React.FC = ({ children }) => {
  return (
    <BoardsProviderContainer>
      <MeProviderContainer>{children}</MeProviderContainer>
    </BoardsProviderContainer>
  )
}
