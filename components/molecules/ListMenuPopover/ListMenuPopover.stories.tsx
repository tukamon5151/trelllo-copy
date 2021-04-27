import { ListMenuPopover, Props } from './ListMenuPopover'
import { Base as ListComponent } from '../../organizations/ListComponent/ListComponent.stories'

export default {
  title: 'molecules/ListMenuPopover',
  component: ListMenuPopover,
}

const Template = (args: Props): React.ReactElement => (
  <ListMenuPopover {...args} />
)

export const Base = Template.bind({})
Base.args = {
  listId: ListComponent.args.list.id,
}
