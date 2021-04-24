// ===
// @modules
import { Button, Icon, Box, Collapse, BoxProps, Text } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'
import { Input } from '../../atoms/Input'
import { RoundBoxButton } from '../../atoms/RoundBoxButton/RoundBoxButton'
import { useCreateListButton } from './useCreateListButton'

// ===
// @interface

export interface Props extends Omit<BoxProps, 'onSubmit'> {
  boardId: number
}

// ===
// @view
export const CreateListButton: React.VFC<Props> = ({
  boardId,
  ...other
}) => {
  const {
    state,
    inputRef,
    onChange,
    onFinishCreation,
    onStartCreation,
    onSubmit
  } = useCreateListButton({ boardId  })

  const { isCreating, name } = state

  return (
    <>
      <Box
        p={isCreating ? 1 : 0}
        bg={isCreating ? 'gray.100' : ''}
        borderRadius={3}
        {...other}
      >
        {!isCreating && (
          <RoundBoxButton
            mode="white"
            onClick={onStartCreation}
            {...other}
            p={2}
          >
            <Icon as={IoMdAdd} w={8} mr={2} />
            <Text size="sm">もう一つリストを追加</Text>
          </RoundBoxButton>
        )}
        <Collapse in={isCreating} animateOpacity>
          <Input
            ref={inputRef}
            onChange={onChange}
            bg="white"
            color="black"
            fontWeight="bold"
            mb={2}
            value={name}
            placeholder="リストのタイトルを入力"
          />
          <Button onClick={onSubmit} mr={1} colorScheme="green">
            リストを追加
          </Button>
          <Icon as={CgClose} onClick={onFinishCreation} w={8} />
        </Collapse>
      </Box>
    </>
  )
}
