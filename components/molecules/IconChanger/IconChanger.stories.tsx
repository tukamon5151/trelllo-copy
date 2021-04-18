import { withFormik } from '../../../.storybook/withFormik'
import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'
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
  image: getAbsoluteUrl('/user-image.png'),
  callback: async () => undefined,
}
