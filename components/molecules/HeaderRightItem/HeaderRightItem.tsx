// ===
// @modules
import Link from 'next/link'
import { Flex, FlexProps, Icon, Avatar } from '@chakra-ui/react'
import { CgInfo, CgBell } from 'react-icons/cg'
import { VscAdd } from 'react-icons/vsc'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { useCurrentUser } from '../../../lib/client/hooks/useCurrentUser'

// ===
// @interface

// ===
// @view
export const HeaderRightItem: React.FC<FlexProps> = (props) => {
  const currentUser = useCurrentUser()

  return (
    <Flex justifyContent="flex-end" {...props}>
      <RoundSquareButton mr={1}>
        <Icon as={VscAdd} w={8} />
      </RoundSquareButton>
      <RoundSquareButton mr={1}>
        <Icon as={CgInfo} w={8} />
      </RoundSquareButton>
      <RoundSquareButton mr={1}>
        <Icon as={CgBell} w={8} />
      </RoundSquareButton>
      <Link href="/mypage">
        <Avatar src={currentUser.image} size="sm" />
      </Link>
    </Flex>
  )
}

// ===
// @styled
