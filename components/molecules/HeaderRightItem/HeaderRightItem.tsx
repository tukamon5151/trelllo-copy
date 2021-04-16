// ===
// @modules
import { Flex, FlexProps, Icon, Avatar } from '@chakra-ui/react'
import { CgInfo, CgBell } from 'react-icons/cg'
import { VscAdd } from 'react-icons/vsc'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { User } from '../../../hooks/useUser'

// ===
// @interface
export interface Props extends FlexProps {
  user: User
}

// ===
// @view
export const HeaderRightItem: React.FC<Props> = ({ user, ...other }) => {
  return (
    <Flex justifyContent="flex-end" {...other}>
      <RoundSquareButton mr={1}>
        <Icon as={VscAdd} w={8} />
      </RoundSquareButton>
      <RoundSquareButton mr={1}>
        <Icon as={CgInfo} w={8} />
      </RoundSquareButton>
      <RoundSquareButton mr={1}>
        <Icon as={CgBell} w={8} />
      </RoundSquareButton>
      <Avatar src={user.image} size="sm" />
    </Flex>
  )
}

// ===
// @styled
