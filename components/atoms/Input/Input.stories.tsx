import { Input } from './Input'
import { Formik } from 'formik'
import { InputProps } from '@chakra-ui/react'

export default {
  title: 'atoms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <Formik initialValues={{}} onSubmit={() => null}>
        <Story />
      </Formik>
    ),
  ],
}

export const Base = (args: InputProps): React.ReactElement => (
  <Input {...args} />
)

Base.args = {
  name: 'hoge',
}
