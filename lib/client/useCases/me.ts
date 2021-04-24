import { useContext, createContext } from 'react'

import { Dispatchers } from '../state/me'
import { UpdateUser } from '../../../dto/user'
import {
  getMeRequest,
  patchIconRequest,
  patchMeRequest,
} from '../requests/userRequest'

export const createMeUseCases = (dispatchers: Dispatchers) => {
  const getInitMe = async () => {
    const me = await getMeRequest()
    dispatchers.updateMe(me)
  }

  const updateMe = async (dto: UpdateUser) => {
    const me = await patchMeRequest(dto)
    dispatchers.updateMe(me)
  }

  const updateIcon = async (dto: FormData) => {
    const me = await patchIconRequest(dto)
    dispatchers.updateMe(me)
  }

  return {
    getInitMe,
    updateMe,
    updateIcon,
  }
}

type UseCases = ReturnType<typeof createMeUseCases>
const MeUseCaseContext = createContext<UseCases>({} as UseCases)
export const MeUseCaseProvider = MeUseCaseContext.Provider
export const useMeUseCases = () => useContext<UseCases>(MeUseCaseContext)
