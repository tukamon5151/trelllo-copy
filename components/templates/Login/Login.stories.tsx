import { Login } from './Login'

export default {
  title: 'templates/login',
  component: Login,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <Login {...args} />
)
