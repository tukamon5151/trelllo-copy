import { getSession } from 'next-auth/client'
import { NextApiRequest } from 'next'
import { User } from 'next-auth'

export const getCurrentUser = async (
  req: NextApiRequest,
): Promise<User | undefined> => {
  const session = await getSession({ req })
  return session?.user
}
