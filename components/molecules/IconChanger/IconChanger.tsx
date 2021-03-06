// ===
// @modules
import {
  VStack,
  Avatar,
  Center,
  Icon,
  Text,
  StackProps,
} from '@chakra-ui/react'
import { GrUpdate } from 'react-icons/gr'
import { useRef } from 'react'

// ===
// @interface

export interface Props extends StackProps {
  image?: string
  callback: (file: File) => void
}

// ===
// @view
export const IconChanger: React.FC<Props> = ({ image, callback, ...other }) => {
  const fileFieldRef = useRef<HTMLInputElement>()

  const onClick = (e) => {
    e.preventDefault()
    fileFieldRef?.current?.click()
  }

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    callback(e.target.files[0])
  }

  return (
    <>
      <input type="file" hidden ref={fileFieldRef} onChange={onFileChange} />
      <VStack
        _hover={{
          cursor: 'pointer',
        }}
        {...other}
      >
        <Avatar src={image} size="2xl" mb={3} onClick={onClick} />
        <Center onClick={onClick}>
          <Icon as={GrUpdate} w={6} />
          <Text size="sm" colorScheme="gray">
            Change
          </Text>
        </Center>
      </VStack>
    </>
  )
}

// ===
// @styled
