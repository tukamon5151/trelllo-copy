// ===
// @modules
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'

// ===
// @interface

// ===
// @view
export const Input: React.FC<InputProps> = ({ name, ...other }) => {
  if (!name) return <ChakraInput name={name} {...other} />

  const [field, meta] = useField(name)
  return (
    <ChakraInput
      isInvalid={!!meta.touched && !!meta.error}
      name={name}
      {...field}
      {...other}
    />
  )
}
