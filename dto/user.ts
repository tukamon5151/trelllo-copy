import { Expose } from 'class-transformer'

export class ResponseUser {
  @Expose() id: number
  @Expose() name?: string
  @Expose() image?: string
  @Expose() introduction?: string
}

export class UpdateUser {
  @Expose() name?: string
  @Expose() image?: string
  @Expose() introduction?: string
}
