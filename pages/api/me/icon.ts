import { NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/server/session'
import { User as UserDto } from '../../../dto/user'
import { updateUser } from '../../../lib/server/repositories/user'
import { initMiddleware } from '../../../lib/server/middleware/initMiddleware'
import { createUploader } from '../../../lib/server/multer'
import { NextApiRequestsWithFormData } from '../../../lib/server/type/NextApiRequestsWithFormData'
import { loginCheck } from '../../../lib/server/middleware/loginCheck'
import { nextPublicUrl } from '../../../lib/server/nextPublicUrl'

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = createUploader()

export default async function handler(
  req: NextApiRequestsWithFormData,
  res: NextApiResponse,
): Promise<void> {
  await initMiddleware(loginCheck)(req, res)
  await initMiddleware(upload.single('file'))(req, res)
  const currentUser = await getCurrentUser(req)

  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    const userDto: UserDto = {
      id: currentUser.id as number,
      image: nextPublicUrl(req.file.path),
    }

    const user = await updateUser(userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
