import { withFormik } from '../../../.storybook/withFormik'
import { IconChanger, Props } from './IconChanger'

export default {
  title: 'molecules/IconChanger',
  component: IconChanger,
  decorators: [withFormik],
}

export const Base = (args: Props): React.ReactElement => (
  <IconChanger {...args} />
)
Base.args = {
  name: 'image',
  callback: async () => undefined,
}
