// ===
// @modules
import { motion } from 'framer-motion'
import { Box, Flex, BoxProps } from '@chakra-ui/react'
import { List } from '../../../model/client/List'
import { ListMenuPopover } from '../ListMenuPopover'
import { Editable } from '../../atoms/Editable'
import { CreateCardButton } from '../../molecules/CreateCardButton/CreateCardButton'
import { useListComponent } from './useListComponent'
import { useListDrag } from './useListDrag'

// ===
// @interface

export interface Props extends BoxProps {
  list: List
  currentIndex: number
}

// @Component
const MotionBox = motion(Box)

export const ListComponent: React.VFC<Props> = ({
  list,
  currentIndex,
  ...other
}) => {
  const { name, onSubmit, onChange, cards } = useListComponent(list)
  const { onDragStart, onDragEnd, onViewportBoxUpdate, ref } = useListDrag({
    currentIndex,
    list,
  })

  return (
    <MotionBox
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      cursor="pointer"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onViewportBoxUpdate={onViewportBoxUpdate}
      whileTap={{ zIndex: 1 }}
      layout
      ref={ref}
      {...other}
    >
      <Box borderRadius={3} bg="gray.100" p={2}>
        <Flex alignItems="center" mb={2}>
          <Editable
            defaultValue={list.name}
            value={name}
            onSubmit={onSubmit}
            onChange={onChange}
            flex={1}
            size="sm"
            fontWeight="bold"
          />
          <ListMenuPopover listId={list.id} currentIndex={currentIndex} />
        </Flex>
        {cards.map((card) => (
          <Box key={card.id} mb={2}>
            {card.title}
          </Box>
        ))}
        <CreateCardButton listId={list.id} />
      </Box>
    </MotionBox>
  )
}
