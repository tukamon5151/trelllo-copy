// ===
// @modules
import {
  VStack,
  Heading,
  Icon,
  Square,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { Board } from '../../../model/client/Bard'

// ===
// @interface

export interface Props {
  boards?: Board[]
}

// ===
// @view
export const BoardList: React.FC<Props> = (props) => {
  return (
    <VStack spacing={3}>
      <Box>
        <Heading size="md">
          <Icon as={AiOutlineStar} mr={2} />
          スター付きボード
        </Heading>
      </Box>
      <Box>
        <Heading size="md">
          <Flex alignItems="center">
            <Square
              bgGradient="linear(to-b, orange.500, orange.300 )"
              mr={2}
              borderRadius={3}
              p={2}
              color="white"
            >
              パ
            </Square>
            パーソナルボード
          </Flex>
        </Heading>
      </Box>
      <Box>
        <Button colorScheme="gray.200" color="black">
          アーカイブ済みの全てのボードを表示
        </Button>
      </Box>
    </VStack>
  )
}
