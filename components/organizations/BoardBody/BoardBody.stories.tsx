import { Story } from '@storybook/react'
import { BaseProvider } from '../../Provider/BaseProvider'
import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { BoardBody, Props } from './BoardBody'

const lists = [
  {
    id: 1,
    name: 'list',
    boardId: BoardShow.args.board.id,
    position: 0
  },
]

export default {
  title: 'organizations/BoardBody',
  component: BoardBody,
  decorators: [
    (Story: Story) => (
      <BaseProvider initialState={{ listsState: { lists } }}>
        <Story />
      </BaseProvider>
    ),
  ],
}

const Template = (args: Props): React.ReactElement => <BoardBody {...args} />

export const Base = Template.bind({})
Base.args = {
  boardId: BoardShow.args.board.id,
}
