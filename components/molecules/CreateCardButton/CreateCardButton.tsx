// ===
// @modules
import { Button, Box, BoxProps, Icon } from '@chakra-ui/react'
import { CgClose } from 'react-icons/cg'
import { Input } from '../../atoms/Input'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'
import { useCreateCardButton } from './useCreateCardButton'

// ===
// @interface

export type Props = {
  listId: number
} & BoxProps

// ===
// @view
export const CreateCardButton: React.VFC<Props> = ({ listId, ...other }) => {
  const {
    value,
    onChange,
    onSubmit,
    onStartCreating,
    onEndCreating,
    isCreating,
    inputRef,
  } = useCreateCardButton({ listId })
  if (isCreating)
    return (
      <Box {...other}>
        <Input
          ref={inputRef}
          value={value}
          onChange={onChange}
          mb={2}
          placeholder="このカードにタイトルを入力"
        />
        <Button onClick={onSubmit} colorScheme="green" mr={2}>
          カードを追加
        </Button>
        <Icon as={CgClose} onClick={onEndCreating} />
      </Box>
    )

  return (
    <Box {...other}>
      <RoundBoxButton onClick={onStartCreating} w="100%" mode="black">
        カードを追加
      </RoundBoxButton>
    </Box>
  )
}
