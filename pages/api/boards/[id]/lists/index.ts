import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../../../lib/server/session'
import { CreateList } from '../../../../../dto/list'
import { createList } from '../../../../../lib/server/useCase/list'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)
  if (!currentUser) return res.status(404).end()

  switch (req.method) {
    case 'POST':
      const createDto = plainToClass(CreateList, JSON.parse(req.body).list, {
        excludeExtraneousValues: true,
      })
      const list = await createList(createDto)
      return res.status(200).json({ list })
    default:
      res.status(404).end()
  }
}
