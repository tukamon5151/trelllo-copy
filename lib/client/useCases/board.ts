import { useContext, createContext } from 'react'
import { Dispatchers } from '../state/boards'

import {
  createBoardRequest,
  getBoardsRequest,
  getBoardRequest,
  addStarRequest,
  removeStarRequest,
  updateBoardRequest,
} from '../requests/boardRequest'

import { CreateBoard, UpdateBoard } from '../../../dto/board'
import { Board } from '../../../model/client/Bard'

export const createBoardUseCases = (dispatchers: Dispatchers) => {
  const createBoard = async (dto: CreateBoard): Promise<Board> => {
    const board = await createBoardRequest(dto)
    dispatchers.addBoard(board)
    return board
  }

  const getInitialBoards = async (): Promise<void> => {
    const boards = await getBoardsRequest()
    dispatchers.updateBoards(boards)
  }

  return {
    createBoard,
    getInitialBoards
  }
}

type UseCases = ReturnType<typeof createBoardUseCases>

const BoardUseCaseContext = createContext<UseCases>({} as UseCases)
export const BoardUseCaseProvider = BoardUseCaseContext.Provider
export const useBoardUseCases = () => useContext<UseCases>(BoardUseCaseContext)
