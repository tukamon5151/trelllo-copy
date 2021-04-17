import { getSession } from 'next-auth/client'
import { NextApiRequest } from 'next'
import { User } from 'next-auth'
import { WithAdditionalParams } from 'next-auth/_utils'

export const getCurrentUser = async (
  req: NextApiRequest,
): Promise<WithAdditionalParams<User> | undefined> => {
  const session = await getSession({ req })
  return session?.user
}
