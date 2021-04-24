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
import { NotEmptyString } from '../../isNotEmptyString'

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

  const addBoardStar = async (boardId: number) => {
    const board = await addStarRequest(boardId)
    dispatchers.updateBoard(board)
  }

  const removeBoardStar = async (boardId: number) => {
    const board = await removeStarRequest(boardId)
    dispatchers.updateBoard(board)
  }

  const updateBoardTitle = async <T extends string>(dto: {
    id: number
    title: NotEmptyString<T>
  }) => {
    const board = await updateBoardRequest(dto as UpdateBoard)
    dispatchers.updateBoard(board)
  }

  const getInitialBoard = async (boardId: number) => {
    const board = await getBoardRequest(boardId)
    dispatchers.addBoard(board)
  }

  const startCreateBoard = () => {
    dispatchers.startCreate()
  }

  const endCreateBoard = () => {
    dispatchers.endCreate()
  }

  return {
    createBoard,
    getInitialBoards,
    addBoardStar,
    removeBoardStar,
    updateBoardTitle,
    getInitialBoard,
    startCreateBoard,
    endCreateBoard,
  }
}

type UseCases = ReturnType<typeof createBoardUseCases>

const BoardUseCaseContext = createContext<UseCases>({} as UseCases)
export const BoardUseCaseProvider = BoardUseCaseContext.Provider
export const useBoardUseCases = () => useContext<UseCases>(BoardUseCaseContext)
