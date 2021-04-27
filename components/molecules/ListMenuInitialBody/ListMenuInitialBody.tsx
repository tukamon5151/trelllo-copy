// ===
// @modules
import { Flex, Box } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MenuType } from '../../organizations/ListMenuPopover/useListMenuPopover'
import { useListMenuInitialBody } from './useListMenuInitialBody'

// ===
// @interface

export interface Props {
  listId: number
  setMenuType: Dispatch<SetStateAction<MenuType>>
}

// ===
// @view
export const ListMenuInitialBody: React.VFC<Props> = ({
  listId,
  setMenuType,
}) => {
  const { archiveList } = useListMenuInitialBody(listId)
  return (
    <Flex direction="column">
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
