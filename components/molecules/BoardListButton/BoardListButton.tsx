// ===
// @modules
import { forwardRef } from 'react'
import { Flex, Icon, Text, LinkProps, Link } from '@chakra-ui/react'
import { MdDashboard } from 'react-icons/md'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'

// ===
// @interface
export type Props = LinkProps

// ===
// @view
export const BoardListButton = forwardRef<HTMLAnchorElement, Props>(
  function BoardListButton({ href, ...other }, ref) {
    return (
      <Link href={href} ref={ref} {...other}>
        <RoundBoxButton px={2}>
          <Flex alignItems="center">
            <Icon as={MdDashboard} size={8} mr={1} />
            <Text>ボードリスト</Text>
          </Flex>
        </RoundBoxButton>
      </Link>
    )
  },
)
