import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../../lib/server/session'
import {
  createBoardStar,
  deleteBoardStar,
} from '../../../../lib/server/useCase/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  if (req.method === 'POST') {
    const boardId = parseInt(req.query.id as string)
    const board = await createBoardStar(currentUser.id, boardId)
    res.status(200).json({ board })
  } else if (req.method === 'DELETE') {
    const boardId = parseInt(req.query.id as string)
    const board = await deleteBoardStar(currentUser.id, boardId)
    res.status(200).json({ board })
  } else {
    res.status(404).end()
  }
}
