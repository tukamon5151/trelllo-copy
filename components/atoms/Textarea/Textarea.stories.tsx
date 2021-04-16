import { TextareaProps } from '@chakra-ui/react'
import { withFormik } from '../../../.storybook/withFormik'
import { Textarea } from './Textarea'

export default {
  title: 'atoms/Textarea',
  component: Textarea,
  decorators: [withFormik],
}

export const Base = (args: TextareaProps): React.ReactElement => (
  <Textarea {...args} />
)

Base.args = {
  name: 'hoge',
}
