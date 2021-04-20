// ===
// @modules
import { Box, BoxProps, Icon } from '@chakra-ui/react'
import { IoMdClose } from 'react-icons/io'
import { useEffect, useRef } from 'react'
import { Input } from '../../atoms/Input'

// ===
// @interface

export interface Props extends BoxProps {
  selectedImage?: string
  selectedColor?: string
  onClose: () => void
}

// ===
// @view
export const BoardPreviewForm: React.FC<Props> = ({
  selectedImage,
  selectedColor,
  onClose,
  ...other
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  return (
    <Box
      bg={selectedColor}
      bgImage={selectedImage ? `url(${selectedImage})` : ''}
      bgSize="cover"
      bgPosition="50%"
      borderRadius={3}
      position="relative"
      {...other}
    >
      <Box
        position="absolute"
        zIndex={0}
        bg="rgba(0,0,0,.15)"
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
      <Input
        bg="transparent"
        position="absolute"
        left={2}
        top={2}
        name="title"
        placeholder="ボードタイトルの追加"
        fontWeight="bold"
        fontSize="md"
        color="white"
        w="80%"
        border="none"
        ref={inputRef}
        _hover={{
          bg: 'hsla(0,0%,100%,.15)',
        }}
        _focus={{
          bg: 'hsla(0,0%,100%,.3)',
        }}
        _placeholder={{
          color: 'gray.100',
        }}
      />
      <Icon
        as={IoMdClose}
        w={8}
        position="absolute"
        right={2}
        top={2}
        color="white"
        fontWeight="bold"
        onClick={onClose}
      />
    </Box>
  )
}
