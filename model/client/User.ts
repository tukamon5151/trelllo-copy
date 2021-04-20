import { Expose } from 'class-transformer'

export class User {
  @Expose() id: number
  @Expose() name?: string
  @Expose() email?: string
  @Expose() image?: string
  @Expose() introduction?: string
}
