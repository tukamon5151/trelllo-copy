// ===
// @modules
import { Flex, Box, FlexProps } from '@chakra-ui/react'
import { Sidebar } from '../../organizations/Sidebar/Sidebar'
import { Board } from '../../../model/client/Bard'

// ===
// @interface

export interface Props extends FlexProps {
  boards?: Board[]
}

// ===
// @view
export const Boards: React.FC<Props> = (props) => {
  return (
    <Flex w="1000px" mx="auto" {...props}>
      <Sidebar mr={10} w={60} />
      <Box>ボードのやつ</Box>
    </Flex>
  )
}
