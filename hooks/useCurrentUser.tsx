import { useContext, createContext } from 'react'
import { CurrentUser } from '../model/client/CurrentUser'

export const CurrentUserContext = createContext<CurrentUser>(undefined)

export const useCurrentUser = (): CurrentUser => useContext(CurrentUserContext)

export const CurrentUserProvider = CurrentUserContext.Provider
