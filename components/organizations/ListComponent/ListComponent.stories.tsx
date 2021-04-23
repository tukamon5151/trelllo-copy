import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { ListComponent, Props } from './ListComponent'

export default {
  title: 'organizations/ListComponent',
  component: ListComponent,
}

const Template = (args: Props): React.ReactElement => (
  <ListComponent {...args} />
)

export const Base = Template.bind({})
Base.args = {
  list: {
    id: 1,
    name: 'list',
    boardId: BoardShow.args.board.id,
  },
}
