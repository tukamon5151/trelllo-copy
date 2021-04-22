import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../lib/server/session'
import { CreateList } from '../../../dto/list'
import { createList } from '../../../lib/server/useCase/list'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = await getCurrentUser(req)
  if (!currentUser) return res.status(404).end()

  if (req.method === 'POST') {
    const createDto = plainToClass(CreateList, JSON.parse(req.body.list))
    const list = createList(createDto)
    return res.status(200).json({ list })
  }
  res.status(404).end()
}
