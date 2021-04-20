import { withFormik } from '../../../.storybook/withFormik'
import { BoardCoverGridSelector, Props } from './BoardCoverGridSelector'

export default {
  title: 'molecules/BoardCoverGridSelector',
  component: BoardCoverGridSelector,
  decorators: [withFormik],
}

export const Base = (args: Props): React.ReactElement => (
  <BoardCoverGridSelector {...args} />
)
Base.args = {
  selectedColor: 'red',
}
