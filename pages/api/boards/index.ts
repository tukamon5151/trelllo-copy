import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { initMiddleware } from '../../../lib/server/middleware/initMiddleware'
import { loginCheck } from '../../../lib/server/middleware/loginCheck'
import { getCurrentUser } from '../../../lib/server/session'
import { createBoard, getBoards } from '../../../lib/server/repositories/board'
import { ResponseBoard, CreateBoard } from '../../../dto/board'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  await initMiddleware(loginCheck)(req, res)
  const currentUser = await getCurrentUser(req)

  if (req.method === 'GET') {
    const data = await getBoards(currentUser.id as number)
    const boards = plainToClass(ResponseBoard, data)
    // まだスターの機能を作っていないため、便宜上この様な形にしている
    // TODO: BoardDtoにinitializeする際にスターデータからbook値を決定するようにする
    boards.map((board) => (board.star = true))
    res.status(200).json({ boards })
  } else if (req.method === 'POST') {
    const createBoardDto = plainToClass(CreateBoard, JSON.parse(req.body).board)
    createBoardDto.userId = currentUser.id as number
    const data = await createBoard(createBoardDto)
    const board = plainToClass(ResponseBoard, data)
    res.status(200).json({ board })
  } else {
    res.status(404).end()
  }
}
