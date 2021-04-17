// ===
// @modules
import { VStack, Box, Text, Button } from '@chakra-ui/react'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/Textarea'
import { User } from '../../../hooks/useCurrentUser'

// ===
// @interface
export interface Props {
  user: User
}

// ===
// @view
export const ProfileTextForm: React.FC<Props> = ({ user }) => {
  return (
    <VStack spacing={8} flex={1} align="start">
      <Box w="100%">
        <Text mb={1}>ユーザーネーム</Text>
        <Input name="name" />
      </Box>
      <Box w="100%">
        <Text mb={1}>Googleアカウント</Text>
        <Input isDisabled value={user.email} />
      </Box>
      <Box w="100%">
        <Text mb={1}>紹介文</Text>
        <Textarea name="introduction" />
      </Box>
      <Button type="submit" colorScheme="blue">
        更新する
      </Button>
    </VStack>
  )
}

// ===
// @styled
