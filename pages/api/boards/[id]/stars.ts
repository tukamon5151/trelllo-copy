import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../../lib/server/session'
import { withStar } from '../../../../lib/server/selector/board'
import { createBoardStar } from '../../../../lib/server/useCase/board'
import { ResponseBoard } from '../../../../dto/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  if (req.method === 'POST') {
    const boardId = JSON.parse(req.body).boardId as number | undefined
    if (!boardId) {
      return res.status(404).end()
    }

    const board = withStar(
      await createBoardStar(currentUser?.id as number, boardId),
      currentUser.id,
    )
    res
      .status(200)
      .json(
        plainToClass(ResponseBoard, board, { excludeExtraneousValues: true }),
      )
  } else {
    res.status(404).end()
  }
}
