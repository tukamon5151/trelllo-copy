import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Board } from '../model/client/Bard'
import { getBoards } from '../lib/client/boardRequest'

export const useBoards = (): {
  boards: Board[]
  setBoards: Dispatch<SetStateAction<Board[]>>
} => {
  const [boards, setBoards] = useState<Board[]>(undefined)

  useEffect(() => {
    getBoards().then(setBoards)
  }, [])

  return {
    boards,
    setBoards,
  }
}
