export class ResponseBoard {
  id: number
  title: string
  image?: string
  color?: 'red' | 'blue' | 'green'
  star: boolean

  constructor() {
    this.star = false
  }
}

export class CreateBoard {
  title: string
  image?: string
  color?: 'red' | 'blue' | 'green'
}
