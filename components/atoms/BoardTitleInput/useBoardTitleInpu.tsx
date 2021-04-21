import { useEffect, useRef, useState } from 'react'
import { Props } from './BoardTitleInput'

export const useBoardTitleInput = ({ board, onBlur }: Props) => {
  const [title, setTitle] = useState<string | undefined>(board.title)
  const [isInputting, setIsInputting] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault()
    if (!title) return
    setIsInputting(false)
    const newBoard = await onBlur({ ...board, title })
    setTitle(newBoard.title)
  }

  const handleStartInput: React.MouseEventHandler = (e) => {
    e.preventDefault()
    setIsInputting(true)
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value)

  useEffect(() => {
    if (inputRef.current && isInputting) inputRef.current.focus()
  }, [inputRef.current, isInputting])

  return {
    title,
    isInputting,
    inputRef,
    handleOnBlur,
    handleStartInput,
    handleOnChange,
  }
}
