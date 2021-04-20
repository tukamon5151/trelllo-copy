import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'
import { withFormik } from '../../../.storybook/withFormik'
import { BoardPreviewForm, Props } from './BoardPreviewForm'

export default {
  title: 'molecules/BoardPreviewForm',
  component: BoardPreviewForm,
  decorators: [withFormik],
}

const Template = (args: Props): React.ReactElement => (
  <BoardPreviewForm {...args} />
)

export const ColorBoard = Template.bind({})
ColorBoard.args = {
  color: 'green',
}

export const ImageBoard = Template.bind({})
ImageBoard.args = {
  image: getAbsoluteUrl('/board-cover.png'),
}
