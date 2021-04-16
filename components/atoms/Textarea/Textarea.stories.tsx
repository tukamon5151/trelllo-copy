import { TextareaProps } from '@chakra-ui/react'
import { Formik } from 'formik'
import { Textarea } from './Textarea'

export default {
  title: 'atoms/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <Formik initialValues={{}} onSubmit={() => null}>
        <Story />
      </Formik>
    ),
  ],
}

export const Base = (args: TextareaProps): React.ReactElement => (
  <Textarea {...args} />
)

Base.args = {
  name: 'hoge',
}
