import { BoardStar, Props } from './BoardStar'

export default {
  title: 'atoms/BoardStar',
  component: BoardStar,
}

const Template = (args: Props): React.ReactElement => <BoardStar {...args} />

export const Base = Template.bind({})
Base.args = {
  isStar: false,
  onAdd: () => undefined,
  onRemove: () => undefined,
}

export const Stared = Template.bind({})
Stared.args = {
  ...Base.args,
  isStar: true,
}
