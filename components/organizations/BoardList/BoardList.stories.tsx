import { Story } from '@storybook/react'
import { StackProps as Props } from '@chakra-ui/react'
import { BoardsPageProvider } from '../../../hooks/useBoardsPage'
import { Base as Boards } from '../../templates/Boards/Boards.stories'
import { BoardList } from './BoardList'

export default {
  title: 'organizations/BoardList',
  component: BoardList,
  decorators: [
    (Story: Story): React.ReactElement => (
      <BoardsPageProvider value={Boards.args}>
        <Story />
      </BoardsPageProvider>
    ),
  ],
}

const Template = (args: Props): React.ReactElement => <BoardList {...args} />

export const Base = Template.bind({})
