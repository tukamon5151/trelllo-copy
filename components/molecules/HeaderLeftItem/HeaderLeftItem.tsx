// ===
// @modules
import Link from 'next/link'
import { Flex, FlexProps, Icon } from '@chakra-ui/react'
import { CgMenuGridR } from 'react-icons/cg'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'
import { BoardListButton } from '../BoardListButton/BoardListButton'
import { HomeButton } from '../HomeButton/HomeButton'
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
      <Link href="/" passHref>
        <HomeButton iconWidth={8} mr={1} />
      </Link>
      <Link href="/boards" passHref>
        <BoardListButton mr={1} />
      </Link>
      <SearchBar />
    </Flex>
  )
}
