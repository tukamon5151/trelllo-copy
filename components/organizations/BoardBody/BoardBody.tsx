// ===
// @modules
import { HStack, Box } from '@chakra-ui/react'

// ===
// @interface

export interface Props {}

// ===
// @view
export const BoardBody: React.VFC<Props> = (props) => {
  return (
    <HStack spacing={2}>
      <Box>リスト</Box>
      <Box>リスト</Box>
      <Box>リスト</Box>
      <Box>リスト</Box>
      <Box>リスト</Box>
    </HStack>
  )
}
