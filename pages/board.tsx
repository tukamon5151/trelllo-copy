// ===
// @modules
// ===
import { GetStaticProps } from 'next'
import { Board as BoardType } from '@prisma/client'
import { Box } from '@chakra-ui/react'
import { prisma } from '../lib/prisma'

// ===
// @Types
// ===
interface Props {
  boards: BoardType[]
}

// ===
// @Component
// ===

const Board: React.FC<Props> = ({ boards }) => {
  return (
    <div>
      {boards.map((board) => (
        <Box border="2px solid blue" p={5} key={board.id}>
          id: {board.id}
          <br />
          name: {board.name}
        </Box>
      ))}
    </div>
  )
}

// ===
// @Styles
// ===

// ===
// @export
// ===

export const getStaticProps: GetStaticProps = async () => {
  const boards = await prisma.board.findMany({})
  return {
    props: {
      boards,
    },
  }
}

export default Board
