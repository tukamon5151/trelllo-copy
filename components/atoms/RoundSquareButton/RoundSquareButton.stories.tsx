import { RoundSquareButton } from './RoundSquareButton'

export default {
  title: 'atoms/RoundSquareButton',
  component: RoundSquareButton,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <RoundSquareButton {...args} />
)
