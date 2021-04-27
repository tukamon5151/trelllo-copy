// ===
// @modules
import { Select, Box, Button, BoxProps } from '@chakra-ui/react'
import { useListMenuMoveList } from './useListMenuMoveList'

// ===
// @interface

interface Props extends BoxProps {
  listId: number
  currentIndex: number
}

// ===
// @view
export const ListMenuMoveList: React.VFC<Props> = ({
  listId,
  currentIndex,
}) => {
  const { onSubmit, index, onChange, range } = useListMenuMoveList(
    listId,
    currentIndex,
  )

  return (
    <Box>
      <Select
        isFullWidth
        variant="filled"
        onChange={onChange}
        value={index}
        mb={2}
      >
        {range().map((i) => (
          <option value={String(i)} key={i}>{i + 1}</option>
        ))}
      </Select>
      <Button onClick={onSubmit} colorScheme="green">
        移動
      </Button>
    </Box>
  )
}
