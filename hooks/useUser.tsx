import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { User } from '../model/client/User'
import { getMe } from '../lib/client/userRequest'

export const useUser = (
  userId?: number,
): { user: User; setUser: Dispatch<SetStateAction<User>> } => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    if (userId) {
      getMe().then(setUser)
    }
  }, [userId])

  return { user, setUser }
}
