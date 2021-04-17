import { NextApiRequest } from 'next'

export type NextApiRequestsWithFormData = NextApiRequest & {
  files?: Express.Multer.File[]
  file?: Express.Multer.File
}
