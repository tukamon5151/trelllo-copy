// ===
// @modules
// ===
import { GetStaticProps } from 'next';
import { prisma } from "../lib/prisma";
import { Board as BoardType } from '@prisma/client';

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
    <div>{boards.map(board => <div>
      id: {board.id}<br />
      name: {board.name}
    </div>)}</div>
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