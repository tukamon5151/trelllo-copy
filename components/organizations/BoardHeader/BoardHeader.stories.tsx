import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories.tsx'
import { BoardHeader, Props } from './BoardHeader'

export default {
  title: 'organizations/BoardHeader',
  component: BoardHeader,
}

const Template = (args: Props): React.ReactElement => <BoardHeader {...args} />

export const Base = Template.bind({})
Base.args = { board: BoardShow.args.board }
