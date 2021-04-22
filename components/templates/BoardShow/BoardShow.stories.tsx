import { BoardShow, Props } from './BoardShow'

export default {
  title: 'templates/BoardShow',
  component: BoardShow,
}

const Template = (args: Props): React.ReactElement => <BoardShow {...args} />

export const Base = Template.bind({})
Base.args = {
  board: { id: 1, title: 'title', color: 'green', star: false },
}
