import { LoginModal as Modal } from './LoginModal'

export default {
  title: 'organizations/LoginModal',
  component: Modal,
}

const Template = Modal.bind({})
export const Open = (args: Record<string, unknown>): React.ReactElement => (
  <Template {...args} />
)
Open.args = {
  isOpen: true,
}

export const Close = (args: Record<string, unknown>): React.ReactElement => (
  <Template {...args} />
)
Close.args = {
  isOpen: false,
}
