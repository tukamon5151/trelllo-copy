import { getSession } from 'next-auth/client'
import { NextApiRequest } from 'next'
import { User } from 'next-auth'
import { WithAdditionalParams } from 'next-auth/_utils'

type CurrentUser = {
  id: number
} & WithAdditionalParams<User>

export const getCurrentUser = async (
  req: NextApiRequest,
): Promise<WithAdditionalParams<CurrentUser> | void> => {
  const session = await getSession({ req })
  return session?.user as CurrentUser
}
