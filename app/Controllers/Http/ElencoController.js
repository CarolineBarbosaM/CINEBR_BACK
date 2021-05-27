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
    try {
      const elenco = request.only(["id_entreterimento","atores"])

      await elenco.create(elenco);

      return response.status(200).json({ "message": 'Elenco cadastrada com sucesso.' });

        } 
   
        catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar elenco'}); 
    }

  }

  async list ({ request, response }) {
  try {
    const { id } = request.params;
    const user = await Database.from("elenco").where('id', id)

    if (elenco == ''){

      return response.status(200).json({"message": "message":"Elenco não foi encontrado" })

    }



  }

  }
   
 

  async listAll ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async delete ({ params, request, response }) {



  }
}

module.exports = ElencoController
