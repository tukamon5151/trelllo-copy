import { Base as LoginLayout } from '../LoginLayout/LoginLayout.stories'
import { Profile, Props } from './Profile'

export default {
  title: 'templates/Profile',
  component: Profile,
}

const Template = (args: Props): React.ReactElement => <Profile {...args} />

export const Base = Template.bind({})
Base.args = {
  user: LoginLayout.args.updateUser,
  loading: false,
}
