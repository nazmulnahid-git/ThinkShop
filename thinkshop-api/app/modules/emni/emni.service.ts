import { HttpContext } from '@adonisjs/core/http'

export class EmniService {
  async index(_ctx: HttpContext, payload: any) {
    return {
      message: 'Emni list',
      data: payload,
    }
  }
}
