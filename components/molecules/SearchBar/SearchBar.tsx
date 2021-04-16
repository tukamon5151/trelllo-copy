// ===
// @modules
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { CgSearch, CgClose } from 'react-icons/cg'
import { useState } from 'react'

// ===
// @interface

// ===
// @view
export const SearchBar: React.FC<InputProps> = (props) => {
  const [focus, setFocus] = useState<boolean>(false)
  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  return (
    <InputGroup
      size="sm"
      borderRadius={2}
      w={60}
      _focusWithin={{
        w: 80,
      }}
      {...props}
    >
      <Input
        placeholder={focus ? '検索...' : 'ジャンプ先...'}
        border="none"
        bg="hsla(0,0%, 100%,.3)"
        _placeholder={{
          color: 'white',
        }}
        _focus={{
          background: 'white',
          '&::placeholder': {
            color: 'gray',
          },
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <InputRightElement>
        {focus ? (
          <Icon as={CgClose} w={8} />
        ) : (
          <Icon as={CgSearch} color="white" w={8} />
        )}
      </InputRightElement>
    </InputGroup>
  )
}

// ===
// @styled
