// ===
// @modules
import { Flex, FlexProps, Spinner } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { Sidebar } from '../../organizations/Sidebar/Sidebar'
import { Board } from '../../../model/client/Bard'
import { BoardsPageProvider } from '../../../hooks/useBoardsPage'
import { BoardList } from '../../organizations/BoardList/BoardList'

// ===
// @interface

export interface Props extends FlexProps {
  boards?: Board[]
  setBoards?: Dispatch<SetStateAction<Board[]>>
}

// ===
// @view
export const Boards: React.FC<Props> = ({ boards, setBoards, ...other }) => {
  if (!boards) return <Spinner />

  return (
    <BoardsPageProvider value={{ boards, setBoards }}>
      <Flex w="1000px" mx="auto" {...other}>
        <Sidebar mr={10} w={60} />
        <BoardList />
      </Flex>
    </BoardsPageProvider>
  )
}
