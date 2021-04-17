import { NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/server/session'
import { User as UserDto } from '../../../dto/user'
import { updateUser } from '../../../lib/server/updateUser'
import { initMiddleware } from '../../../lib/server/middleware/initMiddleware'
import { createUploader } from '../../../lib/server/multer'
import { NextApiRequestsWithFormData } from '../../../lib/server/type/NextApiRequestsWithFormData'
import { loginCheck } from '../../../lib/server/middleware/loginCheck'

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = createUploader()
const multerSingle = initMiddleware(upload.single('file'))
const loginCheckMiddleware = initMiddleware(loginCheck)

export default async function handler(
  req: NextApiRequestsWithFormData,
  res: NextApiResponse,
): Promise<void> {
  await loginCheckMiddleware(req, res)
  await multerSingle(req, res)
  const currentUser = await getCurrentUser(req)

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const userDto: UserDto = {
      id: currentUser.id as number,
      image: req.file.path,
    }

    const user = await updateUser(userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
