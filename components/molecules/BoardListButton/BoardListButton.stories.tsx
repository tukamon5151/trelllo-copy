import { BoardListButton } from './BoardListButton'

export default {
  title: 'molecules/BoardListButton',
  component: BoardListButton,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <BoardListButton {...args} />
)
