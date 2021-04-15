// ===
// @modules
// ===
import { GetStaticProps } from 'next';
import { prisma } from "../lib/prisma";
import { Board as BoardType } from '@prisma/client';
import { Box } from '@chakra-ui/react';

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
    <div>{boards.map(board => <Box border="2px solid blue" p={5}>
      id: {board.id}<br />
      name: {board.name}
    </Box>)}</div>
  )
}

// ===
// @Styles
// ===

// ===
// @export
// ===

export const getStaticProps: GetStaticProps = async (context) => {
  const boards = await prisma.board.findMany({});
  return {
    props: {
      boards
    }
  }
};

export default Board