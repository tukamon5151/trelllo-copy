import { Story } from '@storybook/react'
import { StackProps as Props } from '@chakra-ui/react'
import { Base as Boards } from '../../templates/Boards/Boards.stories'
import { BoardsProviderContainer } from '../../Provider/BoardProviderContainer'
import { BoardList } from './BoardList'

export default {
  title: 'organizations/BoardList',
  component: BoardList,
  decorators: [
    (Story: Story): React.ReactElement => (
      <BoardsProviderContainer initialState={{ boards: Boards.args.boards }}>
        <Story />
      </BoardsProviderContainer>
    ),
  ],
}

const Template = (args: Props): React.ReactElement => <BoardList {...args} />

export const Base = Template.bind({})
