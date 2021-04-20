import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../lib/server/session'
import { UpdateUser } from '../../../dto/user'
import { getUser, updateUser } from '../../../lib/server/useCase/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const currentUser = await getCurrentUser(req)
  if (!currentUser) {
    return res.status(404).end()
  }

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const updateUserDto = plainToClass(UpdateUser, JSON.parse(req.body).user, {
      excludeExtraneousValues: true,
    })
    const user = await updateUser(currentUser.id, updateUserDto)
    res.status(200).json({ user })
  } else if (req.method === 'GET') {
    const user = await getUser(currentUser.id)
    if (!user) return res.status(404).end()

    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
