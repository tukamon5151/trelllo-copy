import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { BoardBackground, Props } from './BoardBackground'

export default {
  title: 'atoms/BoardBody',
  component: BoardBackground,
}

const Template = (args: Props): React.ReactElement => (
  <BoardBackground {...args} />
)

export const Base = Template.bind({})
Base.args = {
  board: BoardShow.args.board,
}
