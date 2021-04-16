import { User } from '../../../hooks/useUser'
import { Header, Props } from './Header'

export default {
  title: 'organizations/Header',
  component: Header,
}

const user: User = {
  id: 1,
  name: 'hoge',
  email: 'hoge@hoge.com',
}

const Template = (args: Props): React.ReactElement => <Header {...args} />

export const Base = Template.bind({})
Base.args = {
  user,
}
