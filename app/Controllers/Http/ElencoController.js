'use strict'
const Elenco= use('App/Models/Elenco')
const Database = use('Database');
const moment = require('moment');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with elencos
 */
class ElencoController {
  async create ({ request, response }) {
    try {
      const elenco = request.only(["id_entreterimento","atores"])

      await Elenco.create(elenco);

      return response.status(200).json({ "message": 'Elenco cadastrada com sucesso.' });
    }
    catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar elenco'});
    }

  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const elenco = await Database.from("elencos").where('id', id)

      if (elenco == ''){
        return response.status(200).json({"message": "Elenco não foi encontrado" })
      }
      return response.status(200).json(elenco);
    } catch(e){
      return response.status(500).json({ "message": "Erro ao listar elenco" });
    }
  }

  async listAll ({ response }) {
    try {
      const elenco = await Database
        .from('elencos')
        .where('deleted_at',null)
        .select('*')

        return response.status(200).json(elenco);
    }
    catch(e) {
      return response.status(500).json({ "message":"Erro ao listar todos os elencos"})
    }
  }

  async update ({ request, response }) {
    try{
      const { id } = request.params;
      const { id_entreterimento, atores } = request.body

      await Elenco.query()
      .from('elencos')
      .where('id', id)
      .update({
        id_entreterimento,
        atores,
        updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
      })

      return response.status(200).json({ "message": "Elenco atualizado com sucesso." })
    }
    catch (e){
      return response.status(500).json({ "mensage": "Erro ao atualizar elenco." });
    }
  }


  async delete ({ request, response }) {

        try {
            const { id }= request.params;

            await Elenco.query()
            .from('elencos')
            .where('id', id)
            .update({
              deleted_at: moment().format("YYYY-MM-DD HH:mm:ss")
            })

            return response.status(200).json({ "mensage": "Elenco deletado com sucesso." });

            }

            catch(e){
              return response.status(500).json({ "mensage": "Erro ao deletar Elenco." });
            }


  }
}

module.exports = ElencoController
