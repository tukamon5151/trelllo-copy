import { withFormik } from '../../../.storybook/withFormik'
import { BoardCoverSelectionItem, Props } from './BoardCoverSelectionItem'

export default {
  title: 'atoms/BoardCoverSelectionItem',
  component: BoardCoverSelectionItem,
  decorators: [withFormik],
}

const Template = (args: Props): React.ReactElement => (
  <BoardCoverSelectionItem {...args} />
)

export const Square = Template.bind({})
Square.args = {
  variant: 'square',
  selectedColor: 'green',
  ownColor: 'red',
}

export const Box = Template.bind({})
Box.args = {
  variant: 'box',
  selectedColor: 'green',
  ownColor: 'red',
}
