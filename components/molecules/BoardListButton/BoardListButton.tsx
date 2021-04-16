// ===
// @modules
import { Flex, Icon, Text, CenterProps } from '@chakra-ui/react'
import { MdDashboard } from 'react-icons/md'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'

// ===
// @interface

// ===
// @view
export const BoardListButton: React.FC<CenterProps> = (props) => {
  return (
    <RoundBoxButton px={2} {...props}>
      <Flex alignItems="center">
        <Icon as={MdDashboard} size={8} mr={1} />
        <Text>ボードリスト</Text>
      </Flex>
    </RoundBoxButton>
  )
}
