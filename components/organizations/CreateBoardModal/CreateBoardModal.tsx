// ===
// @modules
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Center,
  Grid,
  GridItem,
  Flex,
  Box,
} from '@chakra-ui/react'

export type Props = {
  isOpen: boolean
  onClose: () => void
}

// ===
// @view
export const CreateBoardModal: React.VFC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex mb={2}>
          <Box mr={2} bg="red" flex={1}>
            a
          </Box>
          <Box bg="green" w={100}>b</Box>
        </Flex>
        <Box bg="yellow">unko</Box>
      </ModalContent>
    </Modal>
  )
}
