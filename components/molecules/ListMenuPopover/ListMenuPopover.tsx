// ===
// @modules
import {
  Popover,
  PopoverHeader,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverArrow,
  PopoverProps,
  Flex,
  Box
} from '@chakra-ui/react'
import { ListMenuIcon } from '../../atoms/ListMenuIcon'
import { useListMenuPopover } from './useListMenuPopover'

// ===
// @interface

export type Props = { listId: number } & PopoverProps

// ===
// @view
export const ListMenuPopover: React.VFC<Props> = ({ listId, ...other }) => {
  const { isOpen, onOpen, onClose, archiveList } = useListMenuPopover(listId)
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="right"
      {...other}
    >
      <PopoverTrigger>
        <ListMenuIcon w={8} color="gray.500" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>リスト操作</PopoverHeader>
        <PopoverBody>
          <Flex direction="column">
            <Box
              onClick={archiveList}
              _hover={{
                bg: 'gray.200',
              }}
            >
              このリストをアーカイブ
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
