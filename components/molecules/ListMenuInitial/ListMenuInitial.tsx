// ===
// @modules
import { Flex, Box } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MenuType } from '../../organizations/ListMenuPopover/useListMenuPopover'
import { useListMenuInitial } from './useListMenuInitial'

// ===
// @interface

export interface Props {
  listId: number
  setMenuType: Dispatch<SetStateAction<MenuType>>
}

// ===
// @view
export const ListMenuInitial: React.VFC<Props> = ({ listId, setMenuType }) => {
  const { archiveList } = useListMenuInitial(listId)
  return (
    <Flex direction="column" cursor="pointer">
      <Box
        onClick={archiveList}
        _hover={{
          bg: 'gray.200',
        }}
      >
        このリストをアーカイブ
      </Box>
      <Box
        onClick={() => setMenuType('moveList')}
        _hover={{
          bg: 'gray.200',
        }}
      >
        リストを移動
      </Box>
    </Flex>
  )
}
