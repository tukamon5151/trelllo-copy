// ===
// @modules
import { Flex, Box, FlexProps } from '@chakra-ui/react'
import { useListMenuInitial } from './useListMenuInitial'

// ===
// @interface

export type Props = FlexProps

// ===
// @view
export const ListMenuInitial: React.VFC<Props> = () => {
  const { archiveList, onClickMoveListMenu } = useListMenuInitial()
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
        onClick={onClickMoveListMenu}
        _hover={{
          bg: 'gray.200',
        }}
      >
        リストを移動
      </Box>
    </Flex>
  )
}
