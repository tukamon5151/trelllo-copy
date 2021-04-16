import { InputProps } from '@chakra-ui/react'
import { withFormik } from '../../../.storybook/withFormik'
import { Input } from './Input'

export default {
  title: 'atoms/Input',
  component: Input,
  decorators: [withFormik],
}

export const Base = (args: InputProps): React.ReactElement => (
  <Input {...args} />
)

Base.args = {
  name: 'hoge',
}
