// ===
// @modules
import { Button } from '@chakra-ui/react'
import { CreateList } from '../../../dto/list'
import { useCreateListButton } from './useCreateListButton'
import { Input } from '../../atoms/Input'

// ===
// @interface

export interface Props {
  boardId: number
  onSubmit: (CreateList) => Promise<void>
}

// ===
// @view
export const CreateListButton: React.VFC<Props> = (props) => {
  const {
    state,
    inputRef,
    onChange,
    onFinishCreation,
    onStartCreation,
    onSubmit,
  } = useCreateListButton(props)

  if (state.isCreating) {
    return (
      <div>
        <Input ref={inputRef} onChange={onChange} />
        <Button onClick={onFinishCreation}>close</Button>
        <Button onClick={onSubmit}>submit</Button>
      </div>
    )
  }
  return <Button onClick={onStartCreation}>hoge</Button>
}
