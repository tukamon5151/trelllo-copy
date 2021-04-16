// ===
// @modules
import { Avatar } from '@chakra-ui/react'
import { User } from '../../../hooks/useUser'
import { HeaderContainer } from '../../atoms/HeaderContainer'
import { HeaderLeftItem } from '../../molecules/HeaderLeftItem'
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
      <div style={{ flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
        <div>AddIcon</div>
        <div>Notice</div>
        <div>
          <Avatar src={user.image} />
        </div>
      </div>
    </HeaderContainer>
  )
}
