import { Base as ListComponent } from '../ListComponent/ListComponent.stories'
import { ListMenuPopover, Props } from './ListMenuPopover'

export default {
  title: 'organizations/ListMenuPopover',
  component: ListMenuPopover,
}

const Template = (args: Props): React.ReactElement => (
  <ListMenuPopover {...args} />
)

export const Base = Template.bind({})
Base.args = {
  listId: ListComponent.args.list.id,
}
