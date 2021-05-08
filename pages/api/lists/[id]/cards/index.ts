import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../../../lib/server/session'
import { plainToClass } from 'class-transformer'
import { CreateCard } from '../../../../../dto/card'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentUser = getCurrentUser(req)
  if (!currentUser) {
    return res.status(404).end()
  }

  switch (req.method) {
    case 'POST':
      const dto = plainToClass(CreateCard, JSON.parse(req.body).card)
    // const card = await createCard(dto)
    // res.status(200).json({ card })
  }

  res.status(404).end()
}
