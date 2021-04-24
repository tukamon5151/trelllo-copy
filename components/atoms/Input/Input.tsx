// ===
// @modules
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { forwardRef } from 'react'

// ===
// @interface

// ===
// @view
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { name, ...other },
  ref,
) {
  if (!name) return <ChakraInput {...other} ref={ref} />

  const [field, meta] = useField(name)
  return (
    <ChakraInput
      name={name}
      {...field}
      {...other}
      isInvalid={!!meta.touched && !!meta.error}
      ref={ref}
    />
  )
})
