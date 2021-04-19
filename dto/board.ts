export class ResponseBoard {
  id: number
  title: string
  image?: string
  color?: 'red' | 'blue' | 'green'
  star: boolean
  userId: number
}

export class CreateBoard {
  title: string
  image?: string
  color?: 'red' | 'blue' | 'green'
  userId: number
}
