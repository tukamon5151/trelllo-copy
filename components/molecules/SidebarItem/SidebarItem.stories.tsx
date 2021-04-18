import { CgInfo } from 'react-icons/cg'
import { SidebarItem, Props } from './SidebarItem'

export default {
  title: 'molecules/SidebarItem',
  component: SidebarItem,
}

const Template = (args: Props): React.ReactElement => <SidebarItem {...args} />

export const Base = Template.bind({})
Base.args = {
  isActive: false,
  icon: CgInfo,
  text: 'hoge',
}

export const Active = Template.bind({})
Active.args = {
  isActive: true,
  icon: CgInfo,
  text: 'hoge',
}
