import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../lib/server/authenticate'
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

  const userDto: UserDto = JSON.parse(req.body).user

  if (!isCorrectUser(currentUser, userDto)) {
    res.status(400).end()
    return
  }

  // TODO: UserDtoのvalidationをかけたい

  if (req.method === 'PATCH') {
    const user = await updateUser(userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}

const isCorrectUser = (currentUser, userDto): boolean => {
  return currentUser.id === userDto.id
}
