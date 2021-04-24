import { Editable, Props } from './Editable'

export default {
  title: 'atoms/Editable',
  component: Editable,
}

const Template = (args: Props): React.ReactElement => <Editable {...args} />

export const Base = Template.bind({})
