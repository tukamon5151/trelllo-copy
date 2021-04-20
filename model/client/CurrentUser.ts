import { Expose } from 'class-transformer'

export class CurrentUser {
  @Expose() id: number
  @Expose() name?: string
  @Expose() image?: string
  @Expose() email?: string
}
