import NextAuth, { Session } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { WithAdditionalParams } from 'next-auth/_utils'
import { User } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session(session, user: User) {
      session.user.id = user.id
      return session as WithAdditionalParams<Session>
    },
  },
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
})
