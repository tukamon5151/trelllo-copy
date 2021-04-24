// ===
// @modules
import { Formik, Form } from 'formik'
import { Flex, useToast } from '@chakra-ui/react'
import { IconChanger } from '../../molecules/IconChanger'
import { ProfileTextForm } from '../../molecules/ProfileTextForm/ProfileTextForm'
import { useMeState } from '../../../lib/client/state/me'
import { useMeUseCases } from '../../../lib/client/useCases/me'
import { Values } from './FormValues'
import { validationSchema } from './validationSchema'

// ===
// @interface

// ===
// @view
export const ProfileForm: React.FC = () => {
  const { user } = useMeState()
  const { updateMe, updateIcon } = useMeUseCases()
  const toast = useToast()

  const onSubmit = async (data: Values) => {
    await updateMe(data)
    toast({
      title: '更新しました',
      status: 'success',
      isClosable: true,
      position: 'bottom-right',
    })
  }

  const onFileChange = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    await updateIcon(formData)
    toast({
      title: '更新しました',
      status: 'success',
      isClosable: true,
      position: 'bottom-right',
    })
  }

  return (
    <Formik<Values>
      initialValues={{
        name: user.name,
        introduction: user.introduction,
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
