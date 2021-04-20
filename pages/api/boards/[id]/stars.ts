import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../../lib/server/session'
import { createBoardStar } from '../../../../lib/server/useCase/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  if (req.method === 'POST') {
    console.log(req.query.id)
    const boardId = parseInt(req.query.id as string)
    const board = await createBoardStar(currentUser.id, boardId)
    res.status(200).json({ board })
  } else {
    res.status(404).end()
  }
}
