import { useContext, createContext } from 'react'
import { Dispatchers as BoardsDispatchers } from '../state/boards'
import { Dispatchers as ListsDispatchers } from '../state/lists'
import { Dispatchers as CardsDispatchers } from '../state/card'

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
import { getListsRequest } from '../requests/listRequest'
import { getCardsRequest } from '../requests/cardRequest'

type Dispatchers = BoardsDispatchers & {
  updateLists: ListsDispatchers['updateLists']
  updateCards: CardsDispatchers['updateCards']
}

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

  const initializeBoard = async (boardId: number) => {
    const [board, lists] = await Promise.all([
      getBoardRequest(boardId),
      getListsRequest({ boardId, closed: false }),
    ])
    const cards = await getCardsRequest(lists.map((list) => list.id))
    dispatchers.addBoard(board)
    dispatchers.updateLists(lists)
    dispatchers.updateCards(cards)
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
    initializeBoard,
    startCreateBoard,
    endCreateBoard,
  }
}

type UseCases = ReturnType<typeof createBoardUseCases>

const BoardUseCaseContext = createContext<UseCases>({} as UseCases)
export const BoardUseCaseProvider = BoardUseCaseContext.Provider
export const useBoardUseCases = () => useContext<UseCases>(BoardUseCaseContext)
