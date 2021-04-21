import { useEffect, useRef, useState } from 'react'
import { Props } from './BoardTitleInput'

export const useBoardTitleInput = ({ title, onBlur }: Props) => {
  const [value, setValue] = useState<string | undefined>(title)
  const [isInputting, setIsInputting] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault()
    setIsInputting(false)
    const board = await onBlur(value)
    setValue(board.title)
  }

  const handleStartInput: React.MouseEventHandler = (e) => {
    e.preventDefault()
    setIsInputting(true)
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value)

  useEffect(() => {
    if (inputRef.current && isInputting) inputRef.current.focus()
  }, [inputRef.current, isInputting])

  return {
    value,
    isInputting,
    inputRef,
    handleOnBlur,
    handleStartInput,
    handleOnChange,
  }
}
