import { User } from '../../../hooks/useUser'
import { LoginLayout, Props } from './LoginLayout'

export default {
  title: 'templates/LoginLayout',
  component: LoginLayout,
}

const user: User = {
  id: 1,
  name: 'hoge',
  email: 'hoge@hoge.com',
}

const Template = (args: Props): React.ReactElement => (
  <LoginLayout {...args}>Login Template</LoginLayout>
)

export const Base = Template.bind({})
Base.args = {
  loading: false,
  user,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
