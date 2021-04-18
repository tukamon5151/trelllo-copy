import { Boards, Props } from './Boards'

export default {
  title: 'templates/Boards',
  component: Boards,
}

const Template = (args: Props): React.ReactElement => <Boards {...args} />

export const Base = Template.bind({})
Base.args = {}
