import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { initMiddleware } from '../../lib/server/middleware/initMiddleware'
import { loginCheck } from '../../lib/server/middleware/loginCheck'
import { getCurrentUser } from '../../lib/server/session'
import { getBoards } from '../../lib/server/getBoard'
import { Board as BoardDto } from '../../dto/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  await initMiddleware(loginCheck)(req, res)
  const currentUser = await getCurrentUser(req)

  if (req.method === 'GET') {
    const data = await getBoards(currentUser.id as number)
    const boards = plainToClass(BoardDto, data)
    boards.map((board) => (board.star = true))
    res.status(200).json({ boards })
  } else {
    res.status(404).end()
  }
}
