import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { emniValidator } from './emni.validator.js'
import { EmniService } from './emni.service.js'

@inject()
export default class EmniController {
  constructor(private emniService: EmniService) {}

  async index(ctx: HttpContext) {
    const { request } = ctx
    const payload = await request.validateUsing(emniValidator)
    return this.emniService.index(ctx, payload)
  }
}
