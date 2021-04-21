// ===
// @modules
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  Button,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { CreateBoard } from '../../../dto/board'
import { BoardPreviewForm } from '../../molecules/BoardPreviewForm'
import { BoardCoverGridSelector } from '../../molecules/BoardCoverGridSelector'
import { Board } from '../../../model/client/Bard'
import { validationSchema } from './validationSchema'

export type Props = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (board: CreateBoard) => Promise<Board>
}

// ===
// @view
export const CreateBoardModal: React.VFC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const router = useRouter()

  return (
    <Formik<CreateBoard>
      initialValues={{ title: '', color: 'green', image: undefined }}
      onSubmit={async (values) => {
        const board = await onSubmit(values)
        router.push(`/boards/${board.id}`)
      }}
      validationSchema={validationSchema}
    >
      {({ values, resetForm, isValid }) => (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose()
            resetForm()
          }}
        >
          <ModalOverlay />
          <ModalContent bg="transparent">
            <Form>
              <Flex mb={2}>
                <BoardPreviewForm
                  onClose={onClose}
                  selectedColor={values.color}
                  selectedImage={values.image}
                  flex={1}
                />
                <BoardCoverGridSelector
                  selectedColor={values.color}
                  selectedImage={values.image}
                  ml={2}
                />
              </Flex>
              <Button colorScheme="green" type="submit" isDisabled={!isValid}>
                ボードを作成
              </Button>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Formik>
  )
}
