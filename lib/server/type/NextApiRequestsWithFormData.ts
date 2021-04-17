import { NextApiRequest } from 'next'

export type NextApiRequestsWithFormData = NextApiRequest & {
  files?: any[]
  file?: any
}
