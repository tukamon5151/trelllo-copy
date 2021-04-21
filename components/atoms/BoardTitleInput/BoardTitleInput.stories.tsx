import { Box } from '@chakra-ui/react'
import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { BoardTitleInput, Props } from './BoardTitleInput'

export default {
  title: 'atoms/BoardTitleInput',
  component: BoardTitleInput,
}

const Template = (args: Props): React.ReactElement => (
  <Box bg="blackAlpha.400">
    <BoardTitleInput {...args} />
  </Box>
)

export const Base = Template.bind({})
Base.args = {
  title: BoardShow.args.board.title,
  onBlur: async () => BoardShow.args.board,
}
