import { Base as BaseHeader } from '../../organizations/Header/Header.stories'
import { HeaderRightItem, Props } from './HeaderRightItem'

export default {
  title: 'molecules/HeaderRightItem',
  component: HeaderRightItem,
}

const Template = (args: Props): React.ReactElement => (
  <HeaderRightItem {...args} />
)

export const Base = Template.bind({})
Base.args = {
  user: BaseHeader.args.user,
}
