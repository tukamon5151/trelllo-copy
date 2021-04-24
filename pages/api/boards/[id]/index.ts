import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../../lib/server/session'
import { getBoard, updateBoard } from '../../../../lib/server/usecases/board'
import { UpdateBoard } from '../../../../dto/board'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)
  if (!currentUser) {
    return res.status(404).end()
  }

  if (req.method === 'GET') {
    const boardId = parseInt(req.query.id as string)
    const board = await getBoard(currentUser.id, boardId)
    return res.status(200).json({ board })
  } else if (req.method === 'PATCH') {
    const updateBoardDto = plainToClass(
      UpdateBoard,
      JSON.parse(req.body).board,
      { excludeExtraneousValues: true },
    )
    const board = await updateBoard(currentUser.id, updateBoardDto)
    return res.status(200).json({ board })
  }

  res.status(404).end()
}
