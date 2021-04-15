import { LoginModal as Modal } from './LoginModal'

export default {
  title: 'organizations/LoginModal',
  component: Modal,
}

const Template = Modal.bind({})
export const Open = (args) => <Template {...args} />
Open.args = {
  isOpen: true,
}

export const Close = (args) => <Template {...args} />
Close.args = {
  isOpen: false,
}
