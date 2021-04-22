// ===
// @modules
import Link from 'next/link'
import {
  VStack,
  StackProps,
  Heading,
  Icon,
  Square,
  Box,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { useMemo } from 'react'
import { BoardCard } from '../../molecules/BoardCard'
import {
  useBoardsDispatch,
  useBoardsState,
} from '../../../lib/client/hooks/useBoards'

// ===
// @interface

// ===
// @view
export const BoardList: React.FC<StackProps> = (props) => {
  const { boards } = useBoardsState()
  const { startCreateBoard } = useBoardsDispatch()
  const staredBoards = useMemo(() => boards.filter((board) => board.star), [
    boards,
  ])

  return (
    <VStack spacing={6} {...props} align="start">
      {staredBoards && (
        <Box w="100%">
          <Heading size="md" mb={3}>
            <Icon as={AiOutlineStar} mr={2} />
            スター付きボード
          </Heading>
          <SimpleGrid columns={3} spacing={2}>
            {staredBoards.map((board) => (
              <Link href={`/boards/${board.id}`} key={board.id} passHref>
                <BoardCard board={board} />
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      )}
      <Box w="100%">
        <Heading size="md" mb={3}>
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
        <SimpleGrid columns={3} spacing={2}>
          {boards &&
            boards.map((board) => (
              <Link href={`/boards/${board.id}`} key={board.id} passHref>
                <BoardCard board={board} />
              </Link>
            ))}
          <Button
            colorScheme="gray"
            w="100%"
            h="100%"
            onClick={startCreateBoard}
          >
            新しいボードを作成
          </Button>
        </SimpleGrid>
      </Box>
      <Box>
        <Button colorScheme="gray" color="black">
          アーカイブ済みの全てのボードを表示
        </Button>
      </Box>
    </VStack>
  )
}
