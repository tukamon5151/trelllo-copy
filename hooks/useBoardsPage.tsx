import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { Board } from '../model/client/Bard'

export const useBardsPage = (): BoardsPageContextValue =>
  useContext(BoardsPageContext)
type BoardsPageContextValue = {
  boards: Board[]
  setBoards: Dispatch<SetStateAction<Board[]>>
}
export const BoardsPageContext = createContext<BoardsPageContextValue>(
  undefined,
)
export const BoardsPageProvider = BoardsPageContext.Provider
