// ===
// @modules
import {
  VStack,
  StackProps,
  Heading,
  Icon,
  Square,
  Box,
  Button,
  Flex,
  Grid,
} from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { useMemo } from 'react'
import { BoardCard } from '../../molecules/BoardCard/BoardCard'
import { useBardsPage } from '../../../hooks/useBoardsPage'

// ===
// @interface

// ===
// @view
export const BoardList: React.FC<StackProps> = (props) => {
  const { boards } = useBardsPage()
  const staredBoards = useMemo(() => boards.filter((board) => board.star), [
    boards,
  ])

  return (
    <VStack spacing={5} {...props} align="start">
      {staredBoards && (
        <Box>
          <Heading size="md" mb={3}>
            <Icon as={AiOutlineStar} mr={2} />
            スター付きボード
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            {staredBoards.map((board) => (
              <BoardCard board={board} key={board.id} />
            ))}
          </Grid>
        </Box>
      )}
      <Box>
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
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {boards &&
            boards.map((board) => <BoardCard board={board} key={board.id} />)}
        </Grid>
      </Box>
      <Box>
        <Button colorScheme="gray" color="black">
          アーカイブ済みの全てのボードを表示
        </Button>
      </Box>
    </VStack>
  )
}
