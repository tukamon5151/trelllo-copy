import { Base as Profile } from '../../templates/Profile/Profile.stories'
import { ProfileForm, Props } from './ProfileForm'

export default {
  title: 'organizations/ProfileForm',
  component: ProfileForm,
}

export const Base = (args: Props): React.ReactElement => (
  <ProfileForm {...args} />
)
Base.args = {
  user: Profile.args.user,
}
