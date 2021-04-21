import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../../lib/server/session'
import { getBoard } from '../../../../lib/server/useCase/board'

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
  }

  res.status(404).end()
}
