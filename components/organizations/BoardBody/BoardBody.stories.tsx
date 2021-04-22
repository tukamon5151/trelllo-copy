import { Story } from '@storybook/react'
import { ListsProviderContainer } from '../../Provider/ListsProviderContainer'
import { Base as BoardShow } from '../../templates/BoardShow/BoardShow.stories'
import { BoardBody, Props } from './BoardBody'

const lists = [
  {
    id: 1,
    name: 'list',
    boardId: BoardShow.args.board.id,
  },
]

export default {
  title: 'organizations/BoardBody',
  component: BoardBody,
  decorators: [
    (Story: Story) => (
      <ListsProviderContainer initialState={{ lists }}>
        <Story />
      </ListsProviderContainer>
    ),
  ],
}

const Template = (args: Props): React.ReactElement => <BoardBody {...args} />

export const Base = Template.bind({})
Base.args = {
  boardId: BoardShow.args.board.id,
}
