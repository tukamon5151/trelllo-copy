// ===
// @modules
import {
  Editable as ChakraEditable,
  EditableInput,
  EditablePreview,
  EditableProps,
  EditableInputProps,
  EditablePreviewProps,
} from '@chakra-ui/react'

// ===
// @interface

export interface Props extends EditableProps {
  inputProps?: EditableInputProps
  previewProps?: EditablePreviewProps
}

// ===
// @view
export const Editable: React.VFC<Props> = ({
  inputProps,
  previewProps,
  ...containerProps
}) => {
  return (
    <ChakraEditable {...containerProps}>
      <EditablePreview w="100%" {...previewProps} />
      <EditableInput w="100%" {...inputProps} />
    </ChakraEditable>
  )
}
