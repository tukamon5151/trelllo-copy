// ===
// @modules
import { Formik, Form } from 'formik'
import { Flex } from '@chakra-ui/react'
import { IconChanger } from '../../molecules/IconChanger'
import { ProfileTextForm } from '../../molecules/ProfileTextForm/ProfileTextForm'
import { patchMe, patchIcon } from '../../../lib/client/userRequest'
import { useUser } from '../../../hooks/useMyPage'
import { Values } from './FormValues'
import { validationSchema } from './validationSchema'

// ===
// @interface

// ===
// @view
export const ProfileForm: React.FC = () => {
  const { user, setUser } = useUser()

  const onSubmit = async (data: Values) => {
    const user = await patchMe(data)
    setUser(user)
  }

  const onFileChange = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const user = await patchIcon(formData)
    setUser(user)
  }

  return (
    <Formik<Values>
      initialValues={{
        id: user.id,
        name: user.name,
        introduction: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <Flex>
            <IconChanger image={user.image} callback={onFileChange} mr={10} />
            <ProfileTextForm user={user} />
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
