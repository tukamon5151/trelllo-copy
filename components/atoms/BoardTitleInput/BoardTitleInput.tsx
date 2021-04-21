// ===
// @modules
import { InputProps } from '@chakra-ui/react'
import { Input } from '../Input'
import { Board } from '../../../model/client/Bard'
import { RoundBoxButton } from '../RoundBoxButton/RoundBoxButton'
import { useBoardTitleInput } from './useBoardTitleInpu'

// ===
// @interface
export interface Props extends Omit<InputProps, 'onBlur'> {
  board: Board
  onBlur: (board: Board) => Promise<Board>
}

// ===
// @view
export const BoardTitleInput: React.VFC<Props> = ({
  board,
  onBlur,
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
      color="black"
      onClick={handleStartInput}
      mode="black"
      {...other}
    >
      {title}
    </RoundBoxButton>
  )
}
