import { GoogleLoginButton } from './GoogleLoginButton'

export default {
  title: 'molecules/GoogleLoginButton',
  component: GoogleLoginButton,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <GoogleLoginButton {...args} />
)
