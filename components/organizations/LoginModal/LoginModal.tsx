// ===
// @modules
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react'
import { useCurrentUrl } from '../../../hooks/useCurrentUrl'
import { GoogleLoginButton } from '../../molecules/GoogleLoginButton'

// ===
// @interface
interface Props {
  isOpen: boolean
  onClose: () => void
}

// ===
// @view
export const LoginModal: React.FC<Props> = (props) => {
  const currentUrl = useCurrentUrl()

  return (
    <Modal {...props} isCentered>
      <ModalOverlay />
      <ModalContent p={5} textAlign="center">
        <ModalHeader>Trello</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={15} d="block">
            Trelloはコラボレーション型タスク管理ツールです。ぜひ使ってみてください。
          </Text>
          <GoogleLoginButton callbackUrl={currentUrl} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

// ===
// @styled
