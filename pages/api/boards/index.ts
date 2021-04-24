import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../lib/server/session'
import { CreateBoard } from '../../../dto/board'
import { getBoards, createBoard } from '../../../lib/server/usecases/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  if (req.method === 'GET') {
    const boards = await getBoards(currentUser.id)
    res.status(200).json({ boards })
  } else if (req.method === 'POST') {
    const createBoardDto = plainToClass(
      CreateBoard,
      JSON.parse(req.body).board,
      { excludeExtraneousValues: true },
    )
    const board = await createBoard(currentUser.id, createBoardDto)
    res.status(200).json({ board })
  } else {
    res.status(404).end()
  }
}
