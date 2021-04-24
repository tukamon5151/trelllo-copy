import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../../../lib/server/session'
import { CreateList, GetLists } from '../../../../../dto/list'
import { createList, getLists } from '../../../../../lib/server/usecases/list'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)
  if (!currentUser) return res.status(404).end()

  switch (req.method) {
    case 'POST': {
      const createDto = plainToClass(CreateList, JSON.parse(req.body).list, {
        excludeExtraneousValues: true,
      })
      const list = await createList(createDto)
      return res.status(200).json({ list })
    }
    case 'GET': {
      const dto: GetLists = {
        boardId: parseInt(req.query.id as string),
        closed: req.query.closed === 'true',
      }
      const lists = await getLists(dto)
      return res.status(200).json({ lists })
    }
    default:
      res.status(404).end()
  }
}
