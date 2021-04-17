// ===
// @modules
import { HeaderContainer } from '../../atoms/HeaderContainer'
import { HeaderLeftItem } from '../../molecules/HeaderLeftItem'
import { HeaderRightItem } from '../../molecules/HeaderRightItem'
import { Logo } from '../../atoms/Logo'

// ===
// @interface

// ===
// @view
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeftItem flex={1} />
      <Logo />
      <HeaderRightItem flex={1} />
    </HeaderContainer>
  )
}
