// ===
// @modules
import {
  Box,
  Flex,
  Heading,
  Icon,
  BoxProps,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/react'
import { BiDotsHorizontal } from 'react-icons/bi'
import { List } from '../../../model/client/List'
import { useListsDispatch } from '../../../lib/client/hooks/useLists'

// ===
// @interface

export interface Props extends BoxProps {
  list: List
}

// ===
// @view
export const ListComponent: React.VFC<Props> = ({ list, ...other }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { archiveList } = useListsDispatch()

  return (
    <Box borderRadius={3} bg="gray.100" p={2} {...other}>
      <Flex alignItems="center">
        <Heading flex={1} size="sm">
          {list.name}
        </Heading>
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
        >
          <PopoverTrigger>
            <Icon as={BiDotsHorizontal} w={8} color="gray.500" />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>リスト操作</PopoverHeader>
            <PopoverBody>
              <Flex direction="column">
                <Box
                  onClick={() => archiveList(list.id)}
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
      </Flex>
    </Box>
  )
}
