import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/server/session'
import { getCards } from '../../../lib/server/usecases/card'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  switch (req.method) {
    case 'GET': {
      const listIds = req.query.listIds as string[]
      const dto = {
        listIds: listIds.length
          ? listIds.map((listId) => Number(listId))
          : undefined,
      }
      const cards = await getCards(dto)
      return res.status(200).json({ cards })
    }
  }

  res.status(404).end()
}
