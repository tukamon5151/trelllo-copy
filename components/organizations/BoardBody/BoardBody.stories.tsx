import { BoardBody, Props } from './BoardBody'

export default {
  title: 'organizations/BoardBody',
  component: BoardBody,
}

const Template = (args: Props): React.ReactElement => <BoardBody {...args} />

export const Base = Template.bind({})
