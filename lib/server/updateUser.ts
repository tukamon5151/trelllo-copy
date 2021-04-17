import { User } from '@prisma/client'
import { User as UserDto } from '../../dto/user'
import { prisma } from './prisma'

export const updateUser = async (userDto: UserDto): Promise<User> => {
  return await prisma.user.update({
    data: userDto,
    where: {
      id: userDto.id,
    },
  })
}
