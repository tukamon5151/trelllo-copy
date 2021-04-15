import { Link } from './Link'

export default {
  title: 'atoms/Link',
  component: Link,
}

const Template = (args) => <Link {...args}>Link</Link>

export const BaseLink = Template.bind({})
BaseLink.args = {
  href: '#',
}
