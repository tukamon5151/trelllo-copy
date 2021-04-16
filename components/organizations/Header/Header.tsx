// ===
// @modules
import { Avatar } from '@chakra-ui/react'
import { User } from '../../../hooks/useUser'
import { HeaderContainer } from '../../atoms/HeaderContainer'
import { HeaderLeftItem } from '../../molecules/HeaderLeftItem'

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
      <div>logo</div>
      <div>
        <div>AddIcon</div>
        <div>Notice</div>
        <div>
          <Avatar src={user.image} />
        </div>
      </div>
    </HeaderContainer>
  )
}
