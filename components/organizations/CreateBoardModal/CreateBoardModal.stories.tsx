import { CreateBoardModal, Props } from './CreateBoardModal'

export default {
  title: 'organizations/CreateBoardModal',
  component: CreateBoardModal,
}

export const Base = (args: Props) => <CreateBoardModal {...args} />
Base.args = {
  isOpen: true,
  onClose: () => undefined,
}
