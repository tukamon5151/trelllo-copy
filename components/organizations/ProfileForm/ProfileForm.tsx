// ===
// @modules
import { Formik, Form } from 'formik'
import { Flex } from '@chakra-ui/react'
import { User } from '../../../hooks/useUser'
import { IconChanger } from '../../molecules/IconChanger'
import { ProfileTextForm } from '../../molecules/ProfileTextForm/ProfileTextForm'
import { patchMe } from '../../../lib/client/userRequest'
import { Values } from './FormValues'
import { validationSchema } from './validationSchema'

// ===
// @interface

export interface Props {
  user: User
}

// ===
// @view
export const ProfileForm: React.FC<Props> = ({ user }) => {
  const onSubmit = async (data: Values) => {
    const user = await patchMe(data)
    window.alert(`サクセス! : ${JSON.stringify(user)}`)
  }

  return (
    <Formik<Values>
      initialValues={{
        id: user.id,
        name: user.name,
        introduction: user.introduction,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <Flex>
            <IconChanger image={user.image} callback={console.log} mr={10} />
            <ProfileTextForm user={user} />
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
