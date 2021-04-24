import { useEffect, useRef, useState } from 'react'
import { Props } from './CreateListButton'
import { useListUseCases } from '../../../lib/client/useCases/list'

type State = {
  name: string
  isCreating: boolean
}

const initialState = {
  name: '',
  isCreating: false,
}

export const useCreateListButton = (props: Props) => {
  const [state, setState] = useState<State>(initialState)
  const inputRef = useRef<HTMLInputElement>(null)
  const { createList } = useListUseCases()

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setState((prevState) => ({ ...prevState, name: e.target.value }))

  const onStartCreation = () =>
    setState((prevState) => ({ ...prevState, isCreating: true }))

  const onFinishCreation = () => setState(initialState)

  const onSubmit = async () => {
    if (!state.name) return
    await createList({ boardId: props.boardId, name: state.name })
    onFinishCreation()
  }

  useEffect(() => {
    if (inputRef.current && state.isCreating) inputRef.current.focus()
  }, [inputRef, state.isCreating])

  return {
    inputRef,
    state,
    onChange,
    onStartCreation,
    onFinishCreation,
    onSubmit,
  }
}
