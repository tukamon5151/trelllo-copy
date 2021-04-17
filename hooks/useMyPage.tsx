import {
  useEffect,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'
import { getMe } from '../lib/client/userRequest'
import { User } from '../model/client/User'

export const useMyPage = (userId?: number) => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    if (userId) {
      getMe().then(setUser)
    }
  }, [userId])

  return { user, setUser }
}

export const userContext = createContext<{
  user: User
  setUser: Dispatch<SetStateAction<User>>
}>(undefined)
export const UserProvider = userContext.Provider
export const useUser = () => useContext(userContext)
