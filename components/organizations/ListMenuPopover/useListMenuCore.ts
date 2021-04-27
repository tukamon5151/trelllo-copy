import { useState, createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

export type MenuType = 'initial' | 'moveList'
type Props = {
  listId: number
  currentIndex: number
}

export const useListMenuCore = ({ listId, currentIndex }: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [menuType, setMenuType] = useState<MenuType>('initial')
  const isInitial = () => menuType === 'initial'

  return {
    listId,
    currentIndex,
    onOpen,
    onClose,
    isOpen,
    menuType,
    setMenuType,
    isInitial,
  }
}

type ContextValue = ReturnType<typeof useListMenuCore>
const ListMenuContext = createContext<ContextValue>({} as ContextValue)
export const ListMenuProvider = ListMenuContext.Provider
export const useListMenu = () => useContext<ContextValue>(ListMenuContext)
