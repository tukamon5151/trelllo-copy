import { NextFunction } from 'connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../session'

export const loginCheck = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction,
): Promise<void> => {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    res.status(404).end()
    return
  }

  next()
}
