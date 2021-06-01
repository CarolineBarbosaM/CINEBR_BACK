'use strict'
const Entretenimento = use('App/Models/Entretenimento');
const Database = use('Database');
const moment = require('moment');

class EntretenimentoController {
  async create ({ request, response }) {
    try {
      await Entretenimento.create(request.body);

      return response.status(200).json({ "message": "Tipo de entretenimento cadastrado." });

    } catch(e) {
      return response.status(500).json(e);
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const tipo = await Database.from("entreterimentos").where("id", id)

      if (tipo == '') {
        return response.status(200).json({"message": "Tipo de entretenimento não encontrado!"});
      }

      return response.status(200).json(tipo);
    } catch(e) {
      return response.status(500).json({ "message": "Erro!" });
    }

  }

  async listAll ({response}) {
    try {
      const tipo =  await Database
        .from("entreterimentos")
        .where("deleted_at", null)
        .select('*')

      return response.status(200).json(tipo);
     }
    catch(ex) {
      return response.status(500).json({ "message": "Erro!" });
    }
  }

  async update ({request, response}) {
    try {
      const { id } = request.params;
      const { tipo } = request.body

      await Entretenimento.query()
        .from("entreterimentos")
        .where("id", id)
        .update({
          tipo,
          updated_at: moment().format("YYYY-MM-DD")
        });

      return response.status(200).json({ "mensage": "Tipo de entretenimento atualizado!" });
    }
    catch(ex) {
      return response.status(500).json({ "mensage": "Erro!", ex });
    }
  }

  async delete ({request, response}) {
    try {
      const { id } = request.params;

      await Entretenimento.query()
        .from('entreterimentos')
        .where('id', id)
        .update({ deleted_at: moment().format("YYYY-MM-DD") });

      return response.status(200).json({ "mensage": "Tipo de entretenimento deletado!" });

    }
    catch(ex) {
      return response.status(500).json({ "mensage": "Erro!", ex });
    }
  }
}

module.exports = EntretenimentoController
