// ===
// @modules
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps,
  Text,
  Button,
} from '@chakra-ui/react'
import { GoogleLoginButton } from '../../molecules/GoogleLoginButton'

// ===
// @interface

// ===
// @view
export const LoginModal: React.FC<ModalProps> = (props) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent textAlign="center" p={5}>
        <ModalHeader>Trello</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={15} d="block">
            Trelloはコラボレーション型タスク管理ツールです。ぜひ使ってみてください。
          </Text>
          <GoogleLoginButton />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

// ===
// @styled
