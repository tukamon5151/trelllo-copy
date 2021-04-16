// ===
// @modules
import { Formik, Form } from 'formik'
import { Flex, Avatar, VStack, Button, Text, Box } from '@chakra-ui/react'
import { User } from '../../../hooks/useUser'
import { Values } from './FormValues'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/Textarea'
import { validationSchema } from './validationSchema'

// ===
// @interface

export interface Props {
  user: User
}

// ===
// @view
export const ProfileForm: React.FC<Props> = ({ user }) => {
  return (
    <Formik<Values>
      initialValues={{
        name: user.name,
        image: user.image,
        introduction: '',
      }}
      onSubmit={console.log}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <Flex>
            <Avatar src={values.image} size="2xl" mr={30} />
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
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
