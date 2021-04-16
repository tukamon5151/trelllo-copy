// ===
// @modules
import { User } from '../../../hooks/useUser'
import { HeaderContainer } from '../../atoms/HeaderContainer'
import { HeaderLeftItem } from '../../molecules/HeaderLeftItem'
import { HeaderRightItem } from '../../molecules/HeaderRightItem'
import { Logo } from '../../atoms/Logo'

// ===
// @interface

export interface Props {
  user: User
}

// ===
// @view
export const Header: React.FC<Props> = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderLeftItem flex={1} />
      <Logo />
      <HeaderRightItem user={user} flex={1} />
    </HeaderContainer>
  )
}
