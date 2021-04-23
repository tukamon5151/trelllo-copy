import { useDisclosure } from '@chakra-ui/react'
import { useListsDispatch } from '../../../lib/client/hooks/useLists'

export const useListMenuPopover = (listId: number) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const dispatch = useListsDispatch()

  const archiveList = () => dispatch.archiveList(listId)

  return {
    onOpen,
    onClose,
    isOpen,
    archiveList
  }
}