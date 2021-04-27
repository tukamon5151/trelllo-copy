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
  Box,
  Icon,
} from '@chakra-ui/react'
import { GrFormPrevious } from 'react-icons/gr'
import { ListMenuIcon } from '../../atoms/ListMenuIcon'
import { ListMenuInitial } from '../../molecules/ListMenuInitial'
import { ListMenuMoveList } from '../../molecules/ListMenuMoveList'
import { useListMenuPopover } from './useListMenuPopover'

// ===
// @interface

export type Props = { listId: number; currentIndex: number } & PopoverProps

// ===
// @view
export const ListMenuPopover: React.VFC<Props> = ({
  listId,
  currentIndex,
  ...other
}) => {
  const {
    isOpen,
    onOpen,
    onClose,
    menuType,
    setMenuType,
    isInitial,
  } = useListMenuPopover()

  const Body = () => {
    switch (menuType) {
      case 'initial':
        return <ListMenuInitial listId={listId} setMenuType={setMenuType} />
      case 'moveList':
        return <ListMenuMoveList listId={listId} currentIndex={currentIndex} />
    }
  }

  const headerText = () => {
    switch (menuType) {
      case 'initial':
        return 'リスト操作'
      case 'moveList':
        return 'リストを移動'
      default:
        return <></>
    }
  }

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
        <Flex alignItems="center">
          {!isInitial() ? (
            <Icon
              as={GrFormPrevious}
              onClick={() => setMenuType('initial')}
              w={8}
              cursor="pointer"
            />
          ) : (
            <Box w={8} />
          )}
          <PopoverHeader flex={1} textAlign="center">
            {headerText()}
          </PopoverHeader>
          <PopoverCloseButton position="relative" top={0} />
        </Flex>
        <PopoverBody>
          <Body />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
