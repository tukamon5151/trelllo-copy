import { RoundBoxButton } from './RoundBoxButton'

export default {
  title: 'atoms/RoundBoxButton',
  component: RoundBoxButton,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <RoundBoxButton {...args}>Button</RoundBoxButton>
)
