import { Base as List } from '../../organizations/ListComponent/ListComponent.stories'
import { CreateCardButton, Props } from './CreateCardButton'

export default {
  title: 'molecules/CreateCardButton',
  component: CreateCardButton,
}

const Template = (args: Props): React.ReactElement => (
  <CreateCardButton {...args} />
)

export const Base = Template.bind({})
Base.args = {
  listId: List.args.list.id,
}
