// ===
// @modules
import { InputProps } from '@chakra-ui/react'
import { Input } from '../Input'
import { Board } from '../../../model/client/Bard'
import { RoundBoxButton } from '../RoundBoxButton/RoundBoxButton'
import { useBoardTitleInput } from './useBoardTitleInpu'
import { UpdateBoard } from '../../../dto/board'

// ===
// @interface
export interface Props extends Omit<InputProps, 'onBlur'> {
  board: Board
  onBlur: (dto: UpdateBoard) => Promise<Board>
  mode?: 'black' | 'white'
}

// ===
// @view
export const BoardTitleInput: React.VFC<Props> = ({
  board,
  onBlur,
  mode = 'black',
  ...other
}) => {
  const {
    title,
    isInputting,
    inputRef,
    handleOnBlur,
    handleStartInput,
    handleOnChange,
  } = useBoardTitleInput({ board, onBlur })

  if (isInputting) {
    return (
      <Input
        variant="unstyled"
        fontWeight="bold"
        _focus={{
          bgColor: 'white',
        }}
        {...other}
        value={title}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        ref={inputRef}
      />
    )
  }

  return (
    <RoundBoxButton
      bg="transparent"
      color={mode}
      onClick={handleStartInput}
      mode={mode}
      {...other}
    >
      {title}
    </RoundBoxButton>
  )
}
