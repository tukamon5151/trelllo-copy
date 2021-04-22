import { BoardListButton, Props } from './BoardListButton'

export default {
  title: 'molecules/BoardListButton',
  component: BoardListButton,
}

export const Base = (args: Props): React.ReactElement => (
  <BoardListButton {...args} />
)
