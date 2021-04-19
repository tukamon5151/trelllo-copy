// ===
// @modules
import { Flex, FlexProps, Spinner } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { Sidebar } from '../../organizations/Sidebar/Sidebar'
import { Board } from '../../../model/client/Bard'
import { BoardList } from '../../organizations/BoardList/BoardList'

// ===
// @interface

export interface Props extends FlexProps {
  boards?: Board[]
}

// ===
// @view
export const Boards: React.FC<Props> = ({ boards, ...other }) => {
  if (!boards) return <Spinner />

  return (
    <Flex w="1000px" mx="auto" {...other}>
      <Sidebar mr={10} w={60} />
      <BoardList />
    </Flex>
  )
}
