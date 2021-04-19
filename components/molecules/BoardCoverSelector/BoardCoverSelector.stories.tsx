import { BoardCoverSelector, Props } from './BoardCoverSelector'

export default {
  title: 'molecules/BoardCoverSelector',
  component: BoardCoverSelector
}

export const Base = (args: Props): React.ReactElement => <BoardCoverSelector {...args} />
Base.args = {
  color: 'blue',
}