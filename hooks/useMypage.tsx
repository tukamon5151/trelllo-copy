import { createContext, useContext, Dispatch, SetStateAction } from 'react'
import { User } from '../model/client/User'

export type MypageContextValue = {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

export const MypageContext = createContext<MypageContextValue>(undefined)

export const MypageProvider = MypageContext.Provider

export const useMypage = (): MypageContextValue => useContext(MypageContext)
