import { Base as ListComponent } from '../../organizations/ListComponent/ListComponent.stories'
import { ListMenuInitialBody, Props } from './ListMenuInitialBody'

export default {
  title: 'molecules/ListMenuInitialBody',
  component: ListMenuInitialBody,
}

const Template = (args: Props): React.ReactElement => (
  <ListMenuInitialBody {...args} />
)

export const Base = Template.bind({})
Base.args = {
  listId: ListComponent.args.list.id,
}
