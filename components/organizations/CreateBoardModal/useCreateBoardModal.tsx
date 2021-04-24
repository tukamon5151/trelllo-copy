import { useRouter } from 'next/router'
import { useBoardUseCases } from '../../../lib/client/useCases/board'
import { CreateBoard } from '../../../dto/board'

export const useCreateBoardModal = () => {
  const router = useRouter()
  const { createBoard } = useBoardUseCases()

  const onSubmit = async (values: CreateBoard) => {
    const board = await createBoard(values)
    router.push(`/boards/${board.id}`)
  }

  return {
    onSubmit,
  }
}
