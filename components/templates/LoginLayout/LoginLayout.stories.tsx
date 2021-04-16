import { LoginLayout } from './LoginLayout'

export default {
  title: 'templates/LoginLayout',
  component: LoginLayout,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <LoginLayout {...args}>Base</LoginLayout>
)
