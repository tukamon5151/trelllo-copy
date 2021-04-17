import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandleFunction } from 'connect'

export const initMiddleware = (middleware: NextHandleFunction) => {
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
