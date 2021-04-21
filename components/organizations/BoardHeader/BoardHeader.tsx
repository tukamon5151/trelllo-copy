// ===
// @modules
import { Flex, Spacer, Box, FlexProps } from '@chakra-ui/react'
import { Board } from '../../../model/client/Bard'

// ===
// @interface

export interface Props extends FlexProps {
  board: Board
}

// ===
// @view
export const BoardHeader: React.VFC<Props> = (props) => {
  return (
    <Flex>
      <Box>ああああああああああああああああああああああああ</Box>
      <Spacer />
      <Box>いいいいいいいいいい</Box>
    </Flex>
  )
}
