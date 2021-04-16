// ===
// @modules
import { Flex, FlexProps, Icon } from '@chakra-ui/react'
import { CgHome, CgMenuGridR } from 'react-icons/cg'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { BoardListButton } from '../BoardListButton/BoardListButton'
import { SearchBar } from '../SearchBar'

// ===
// @interface

// ===
// @view
export const HeaderLeftItem: React.FC<FlexProps> = (props) => {
  return (
    <Flex {...props}>
      <RoundSquareButton mr={1}>
        <Icon as={CgMenuGridR} w={8} />
      </RoundSquareButton>
      <RoundSquareButton mr={1}>
        <Icon as={CgHome} w={8} />
      </RoundSquareButton>
      <BoardListButton mr={1} />
      <SearchBar />
    </Flex>
  )
}
