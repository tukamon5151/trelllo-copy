import { Top } from './Top'

export default {
  title: 'templates/Top',
  component: Top,
}

const Template = (args) => <Top {...args} />

export const NonLoginTop = Template.bind({})
