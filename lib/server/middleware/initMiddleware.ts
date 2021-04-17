import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandleFunction, NextFunction } from 'connect'

export const initMiddleware = (
  middleware: NextHandleFunction,
): ((req: NextApiRequest, res: NextApiResponse) => Promise<NextFunction>) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
