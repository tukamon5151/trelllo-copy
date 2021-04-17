import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/server/session'
import { User as UserDto } from '../../../dto/user'
import { updateUser } from '../../../lib/server/updateUser'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  // await multerSingle(req, res)
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    res.status(404).end()
    return
  }

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const userDto: UserDto = JSON.parse(req.body).user
    userDto.id = currentUser.id as number

    const user = await updateUser(userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
