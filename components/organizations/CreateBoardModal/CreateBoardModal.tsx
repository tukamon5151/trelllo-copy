// ===
// @modules
import {
  Modal,
  ModalOverlay,
  ModalContent,
  HStack,
  Box,
  Button,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { CreateBoard } from '../../../dto/board'
import { BoardPreviewForm } from '../../molecules/BoardPreviewForm/BoardPreviewForm'
import { BoardCoverSelector } from '../../molecules/BoardCoverSelector/BoardCoverSelector'

export type Props = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (board: CreateBoard) => void
}

// ===
// @view
export const CreateBoardModal: React.VFC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <Formik<CreateBoard>
      initialValues={{ title: '', color: 'green', image: '' }}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <HStack mb={2} align="start">
                <BoardPreviewForm
                  onClose={onClose}
                  color={values.color}
                  image={values.image}
                  flex={1}
                />
                <BoardCoverSelector
                  color={values.color}
                  image={values.image}
                  ml={2}
                />
              </HStack>
              <Button colorScheme="green" type="submit">
                ボードを作成
              </Button>
            </ModalContent>
          </Modal>
        </Form>
      )}
    </Formik>
  )
}
