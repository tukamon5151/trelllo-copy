import { Base as ListComponent } from '../../organizations/ListComponent/ListComponent.stories'
import { ListMenuInitial, Props } from './ListMenuInitial'

export default {
  title: 'molecules/ListMenuInitial',
  component: ListMenuInitial,
}

const Template = (args: Props): React.ReactElement => (
  <ListMenuInitial {...args} />
)

export const Base = Template.bind({})
Base.args = {
  listId: ListComponent.args.list.id,
}
