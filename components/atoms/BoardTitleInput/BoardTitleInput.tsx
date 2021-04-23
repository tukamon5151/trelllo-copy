// ===
// @modules
import { CenterProps } from '@chakra-ui/react'
import { RoundBoxButton } from '../RoundBoxButton/RoundBoxButton'
import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react'
import { useState } from 'react'
import { isNotEmptyString, NotEmptyString } from '../../../lib/isNotEmptyString'

// ===
// @interface
export interface Props extends Omit<CenterProps, 'onSubmit'> {
  mode?: 'black' | 'white'
  title: string
  updateTitle: <T extends string>(title: NotEmptyString<T>) => void | Promise<void>
}

// ===
// @view
export const BoardTitleInput: React.VFC<Props> = ({
  mode = 'black',
  updateTitle,
  title,
  ...other
}) => {
  const [value, setValue] = useState(title)
  const onSubmit = (value: string) => {
    if (isNotEmptyString(value)) return updateTitle(value)
    setValue(title)
  }

  return (
    <RoundBoxButton color={mode} mode={mode} {...other}>
      <Editable
        defaultValue={title}
        value={value}
        onChange={setValue}
        onSubmit={onSubmit}
        colorScheme={`${mode}Alpha`}
      >
        <EditableInput />
        <EditablePreview />
      </Editable>
    </RoundBoxButton>
  )
}
