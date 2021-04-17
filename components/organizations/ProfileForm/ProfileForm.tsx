// ===
// @modules
import { Formik, Form } from 'formik'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { User } from '../../../hooks/useUser'
import { IconChanger } from '../../molecules/IconChanger'
import { ProfileTextForm } from '../../molecules/ProfileTextForm/ProfileTextForm'
import { patchMe, patchIcon } from '../../../lib/client/userRequest'
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
  const [image, setImage] = useState<string>(user.image)
  const onSubmit = async (data: Values) => {
    const user = await patchMe(data)
    window.alert(`サクセス! : ${JSON.stringify(user)}`)
  }

  const onFileChange = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const user = await patchIcon(formData)
    setImage(user.image)
    window.alert(`サクセス! : ${JSON.stringify({ user })}`)
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
            <IconChanger image={image} callback={onFileChange} mr={10} />
            <ProfileTextForm user={user} />
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
