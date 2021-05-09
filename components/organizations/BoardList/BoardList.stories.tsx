import { Story } from '@storybook/react'
import { StackProps as Props } from '@chakra-ui/react'
import { Base as Boards } from '../../templates/Boards/Boards.stories'
import { BaseProvider } from '../../Provider/BaseProvider'
import { BoardList } from './BoardList'

export default {
  title: 'organizations/BoardList',
  component: BoardList,
  decorators: [
    (Story: Story): React.ReactElement => (
      <BaseProvider
        initialState={{ boardsState: { boards: Boards.args.boards } }}
      >
        <Story />
      </BaseProvider>
    ),
  ],
}

const Template = (args: Props): React.ReactElement => <BoardList {...args} />

export const Base = Template.bind({})
