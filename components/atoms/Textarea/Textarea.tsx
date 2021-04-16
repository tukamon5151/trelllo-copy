// ===
// @modules
import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react'
import { useField } from 'formik'

// ===
// @interface

// ===
// @view
export const Textarea: React.FC<TextareaProps> = ({ name, ...other }) => {
  if (!name) return <ChakraTextarea name={name} {...other} />

  const [field, meta] = useField(name)

  return (
    <ChakraTextarea
      name={name}
      isInvalid={!!meta.touched && !!meta.error}
      {...field}
      {...other}
    />
  )
}
