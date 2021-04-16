import { Logo } from './Logo'

export default {
  title: 'atoms/Logo',
  component: Logo,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <Logo {...args} />
)
