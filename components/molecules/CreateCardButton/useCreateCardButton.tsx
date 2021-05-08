import { useEffect, useRef, useState } from 'react'
import { useCardUseCases } from '../../../lib/client/useCases/card'

export const useCreateCardButton = ({ listId }: { listId: number }) => {
  const [value, setValue] = useState<string>('')
  const [isCreating, setCreating] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { createCard } = useCardUseCases()

  useEffect(() => {
    if (inputRef.current && isCreating) inputRef.current.focus()
  }, [inputRef, isCreating])

  const onStartCreating = () => setCreating(true)

  const onEndCreating = () => setCreating(false)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value)

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    await createCard({ listId, title: value })
    setValue('')
    onEndCreating()
  }

  return {
    value,
    isCreating,
    inputRef,
    onStartCreating,
    onEndCreating,
    onChange,
    onSubmit,
  }
}
