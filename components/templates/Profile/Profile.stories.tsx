import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'
import { User } from '../../../model/client/User'
import { Profile, Props } from './Profile'

export default {
  title: 'templates/Profile',
  component: Profile,
}

const Template = (args: Props): React.ReactElement => <Profile {...args} />

export const Base = Template.bind({})
Base.args = {
  user: {
    id: 1,
    name: 'name',
    introduction: 'introduction',
    email: 'email@email.com',
    image: getAbsoluteUrl('/user-image.png'),
  },
  setUser: (user: User) => user,
}
