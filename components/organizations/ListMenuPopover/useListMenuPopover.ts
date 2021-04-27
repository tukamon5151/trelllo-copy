import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

export type MenuType = 'initial' | 'moveList'
export const useListMenuPopover = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [menuType, setMenuType] = useState<MenuType>('initial')
  const isInitial = () => menuType === 'initial'

  return {
    onOpen,
    onClose,
    isOpen,
    menuType,
    setMenuType,
    isInitial,
  }
}
