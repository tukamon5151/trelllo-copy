import { BoardList, Props } from './BoardList'

export default {
  title: 'organizations/BoardList',
  component: BoardList,
}

const Template = (args: Props): React.ReactElement => <BoardList {...args} />

export const Base = Template.bind({})
