'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const System = use('App/Models/System')
/**
 * Resourceful controller for interacting with systems
 */
class SystemController {
  /**
   * Show a list of all systems.
   * GET systems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const systems = System.all()

    return systems
  }


  /**
   * Create/save a new system.
   * POST systems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()

    const system = await System.create({...data})

    return system
  }

  /**
   * Display a single system.
   * GET systems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const system = await System.findOrFail(params.id)

    return system
  }

  /**
   * Update system details.
   * PUT or PATCH systems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const system = await System.findOrFail(params.id)
    const data = request.all()

    system.merge({...data})

    const systemUpdated = await system.save()

    return systemUpdated
  }

  /**
   * Delete a system with id.
   * DELETE systems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const system = await System.findOrFail(params.id)

    await system.delete()
  }
}

module.exports = SystemController
