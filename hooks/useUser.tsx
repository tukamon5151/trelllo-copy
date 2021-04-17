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

export type MypageContextValue = {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

export const MypageContext = createContext<MypageContextValue>(undefined)

export const MypageProvider = MypageContext.Provider

export const useMypage = (): MypageContextValue => useContext(MypageContext)
