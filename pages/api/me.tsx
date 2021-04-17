import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../lib/server/session'
import { User as UserDto } from '../../dto/user'
import { updateUser } from '../../lib/server/updateUser'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    res.status(404).end()
    return
  }

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const userDto: UserDto = await parseBody(req)

    if (!isCorrectUser(currentUser, userDto)) {
      res.status(400).end()
      return
    }

    const user = await updateUser(userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}

const isCorrectUser = (currentUser, userDto): boolean => {
  return currentUser.id === userDto.id
}

const parseBody = async (req: NextApiRequest): Promise<UserDto> => {
  if (req.body.files) return await uploadFile(req)
  return JSON.parse(req.body).user as UserDto
}

const uploadFile = async (req: NextApiRequest): Promise<UserDto> => {
  const currentUser = await getCurrentUser(req)
  const image = 'https://~~~~~'
  return { id: currentUser.id, image } as UserDto
}
