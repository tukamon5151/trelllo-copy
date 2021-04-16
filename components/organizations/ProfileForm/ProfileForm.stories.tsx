import { ProfileForm, Props } from './ProfileForm'
import { Base as Profile } from '../../templates/Profile/Profile.stories'

export default {
  title: 'organizations/ProfileForm',
  component: ProfileForm,
}

export const Base = (args: Props) => <ProfileForm {...args} />
Base.args = {
  user: Profile.args.user,
}
