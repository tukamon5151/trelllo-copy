import { Base as Profile } from '../../templates/Profile/Profile.stories'
import { withFormik } from '../../../.storybook/withFormik'
import { ProfileTextForm, Props } from './ProfileTextForm'

export default {
  title: 'molecules/ProfielTextForm',
  component: ProfileTextForm,
  decorators: [withFormik],
}

export const Base = (args: Props): React.ReactElement => (
  <ProfileTextForm {...args} />
)
Base.args = {
  user: Profile.args.updateUser,
}
