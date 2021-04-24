import { NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/server/session'
import { UpdateUser } from '../../../dto/user'
import { initMiddleware } from '../../../lib/server/middleware/initMiddleware'
import { createUploader } from '../../../lib/server/multer'
import { NextApiRequestsWithFormData } from '../../../lib/server/type/NextApiRequestsWithFormData'
import { nextPublicUrl } from '../../../lib/server/nextPublicUrl'
import { updateUser } from '../../../lib/server/usecases/user'

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
  const currentUser = await getCurrentUser(req)

  if (!currentUser) {
    return res.status(404).end()
  }

  await initMiddleware(upload.single('file'))(req, res)
  // TODO: UserDtoのvalidationをかけたい
  // prismaによってDBレベルの型安全は担保されているが、アプリケーションの仕様に基づくValidationがかけられていない
  // そういう仕様が登場する頃に考える
  if (req.method === 'PATCH') {
    if (!req.file) {
      return res.status(400).end()
    }
    const userDto: UpdateUser = { image: nextPublicUrl(req.file.path) }
    const user = await updateUser(currentUser.id, userDto)
    res.status(200).json({ user })
  } else {
    res.status(404).end()
  }
}
