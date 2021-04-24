import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../../lib/server/session'
import { UpdateList } from '../../../../dto/list'
import { updateList } from '../../../../lib/server/usecases/list'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = getCurrentUser(req)
  if (!currentUser) {
    res.status(404).end()
  }

  switch (req.method) {
    case 'PATCH': {
      const dto = plainToClass(UpdateList, JSON.parse(req.body).list)
      const list = await updateList(dto)
      res.status(200).json({ list })
    }
  }
  res.status(404).end()
}
