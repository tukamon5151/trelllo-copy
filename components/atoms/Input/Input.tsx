// ===
// @modules
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { forwardRef } from 'react'

// ===
// @interface

// ===
// @view
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...other }, ref) => {
    if (!name) return <ChakraInput name={name} {...other} />

    const [field, meta] = useField(name)
    return (
      <ChakraInput
        isInvalid={!!meta.touched && !!meta.error}
        name={name}
        ref={ref}
        {...field}
        {...other}
      />
    )
  },
)
