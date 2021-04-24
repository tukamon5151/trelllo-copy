import { useDisclosure } from '@chakra-ui/react'
import { useListUseCases } from '../../../lib/client/useCases/list'

export const useListMenuPopover = (listId: number) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { archiveList } = useListUseCases()

  return {
    onOpen,
    onClose,
    isOpen,
    archiveList: () => archiveList(listId),
  }
}
