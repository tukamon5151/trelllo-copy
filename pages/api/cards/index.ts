import { NextApiRequest, NextApiResponse } from 'next'
import { useCurrentUser } from '../../../lib/client/hooks/useCurrentUser'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = useCurrentUser()

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
      // const cards = await getCards(dto)
      // return res.status(200).json({ cards })
    }
  }

  res.status(404).end()
}
