'use strict'
const Elenco= use('App/Models/Elenco')
const Database = use('Database');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with elencos
 */
class ElencoController {
  async create ({ request, response, auth }) {
    

  }

  async list ({ request, response }) {
  }


  async listAll ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async delete ({ params, request, response }) {



  }
}

module.exports = ElencoController
