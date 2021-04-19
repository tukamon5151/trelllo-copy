import { NextApiRequest, NextApiResponse } from 'next'
import { plainToClass } from 'class-transformer'
import { getCurrentUser } from '../../../lib/server/session'
import { User as UserDto } from '../../../dto/user'
import { loginCheck } from '../../../lib/server/middleware/loginCheck'
import { initMiddleware } from '../../../lib/server/middleware/initMiddleware'
import { getUser, updateUser } from '../../../lib/server/repositories/user'

const loginCheckMiddleware = initMiddleware(loginCheck)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  await loginCheckMiddleware(req, res)
  const currentUser = await getCurrentUser(req)

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const userDto: UserDto = JSON.parse(req.body).user
    userDto.id = currentUser.id as number

    const user: UserDto = plainToClass(UserDto, await updateUser(userDto))
    res.status(200).json({ user })
  } else if (req.method === 'GET') {
    const user: UserDto = plainToClass(
      UserDto,
      await getUser(currentUser.id as number),
    )
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
