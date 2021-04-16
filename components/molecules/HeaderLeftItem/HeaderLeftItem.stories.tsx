import { HeaderLeftItem } from './HeaderLeftItem'

export default {
  title: 'molecules/HeaderLeftItem',
  component: HeaderLeftItem,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <HeaderLeftItem {...args} />
)
