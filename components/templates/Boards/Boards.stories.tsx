import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'
import { Boards, Props } from './Boards'

export default {
  title: 'templates/Boards',
  component: Boards,
}

const Template = (args: Props): React.ReactElement => <Boards {...args} />

export const Base = Template.bind({})
Base.args = {
  boards: [
    { id: 1, title: 'Board1', color: 'blue', star: false },
    {
      id: 2,
      title: 'Board1',
      color: '',
      image: getAbsoluteUrl('/board-cover.png'),
      star: false,
    },
    { id: 3, title: 'Board1', color: 'green', star: true },
    { id: 4, title: 'Board1', color: 'blue', star: false },
    {
      id: 5,
      title: 'Board1',
      color: '',
      image: getAbsoluteUrl('/board-cover.png'),
      star: false,
    },
  ],
  setBoards: () => undefined,
}
