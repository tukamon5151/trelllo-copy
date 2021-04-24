import { useRouter } from 'next/router'
import { useBoardsState } from '../../../lib/client/state/boards'
import { useBoardUseCases } from '../../../lib/client/useCases/board'
import { CreateBoard } from '../../../dto/board'

export const useCreateBoardModal = () => {
  const router = useRouter()
  const { isCreating } = useBoardsState()
  const { endCreateBoard } = useBoardUseCases()
  const { createBoard } = useBoardUseCases()

  const onSubmit = async (values: CreateBoard) => {
    const board = await createBoard(values)
    router.push(`/boards/${board.id}`)
  }

  return {
    onSubmit,
    isOpen: isCreating,
    onClose: endCreateBoard,
  }
}
