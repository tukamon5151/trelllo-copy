import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Board } from '../model/client/Bard'

export const useBoards = (): {
  boards: Board[]
  setBoards: Dispatch<SetStateAction<Board[]>>
} => {
  const [boards, setBoards] = useState<Board[]>(undefined)

  useEffect(() => {}, [])

  return {
    boards,
    setBoards,
  }
}
