import NextAuth, { Session } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { User } from '@prisma/client'
import { prisma } from '../../../lib/server/prisma'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session(session: Session & { user: { id: number } }, user: User) {
      session.user.id = user.id
      return session
    },
  },
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
})
