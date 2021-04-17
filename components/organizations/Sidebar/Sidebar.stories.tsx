import { Sidebar, Props } from './Sidebar'

export default {
  title: 'organizations/Sidebar',
  component: Sidebar,
}

const Template = (args: Props): React.ReactElement => <Sidebar {...args} />

export const Board = Template.bind({})
