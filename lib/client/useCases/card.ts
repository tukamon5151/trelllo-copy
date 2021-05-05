import { useContext, createContext } from 'react'
import { Dispatchers } from '../state/card'

export const createCardUseCase = (dispatchers: Dispatchers) => {
  const createCard = async ({
    title,
    listId,
  }: {
    title: string
    listId: number
  }) => {
    const card = { id: 1, title, listId }
    dispatchers.addCard(card)
  }

  return {
    createCard,
  }
}

type UseCase = ReturnType<typeof createCardUseCase>
const CardUseCasesContext = createContext<UseCase>({} as UseCase)
export const CardUseCasesProvider = CardUseCasesContext.Provider
export const useCardUseCases = () => useContext<UseCase>(CardUseCasesContext)
