import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { CreateListButton, Props } from './CreateListButton'

export default {
  title: 'molecules/AddListButton',
  component: CreateListButton,
}

const Template = (args: Props): React.ReactElement => (
  <CreateListButton {...args} />
)

export const Base = Template.bind({})
Base.args = {
  boardId: BoardShow.args.board.id,
}
