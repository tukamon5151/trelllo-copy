import { SearchBar } from './SearchBar'

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
}

const Template = (args: Record<string, unknown>): React.ReactElement => (
  <SearchBar {...args} />
)

export const Base = Template.bind({})
