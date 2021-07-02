'use strict'

const Documentario = use('App/Models/Documentario');
const Database = use('Database');
const moment = require('moment');

class DocumentarioController {
  async create ({ request, response }) {
    try {
      const documentarios = request.only(["titulo", "ano", "sinopse", "classificacao", "capa", "id_ator", "id_categoria"]);

      await Documentario.create(documentarios);

      return response.status(200).json({ "message": "Documentario cadastrado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "message": "Erro ao cadastrar documentario"});
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const documentario = await Database.from('documentarios').where('id', id)

      if (documentario == '') {
        return response.status(200).json({ "message": "Documentario não foi encontrado" });
      }

      return response.status(200).json(documentario);
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar documentario" });
    }
  }


  async listAll ({ response }) {
    try {
      const documentario =  await Database
        .from('documentarios')
        .where('deleted_at', null)
        .select('*')

      return response.status(200).json(documentario);
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar todos os documentarios" });
    }
  }


  async update ({ request, response }) {
    try {
      const { id } = request.params;
      const { titulo, ano,  sinopse, classificacao, capa, id_ator } = request.body

      await Documentario.query()
        .from('documentarios')
        .where('id', id)
        .update({
          titulo,
          ano,
          sinopse,
          classificacao,
          capa,
          id_ator,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
        });

      return response.status(200).json({ "mensage": "Documentario atualizada com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizado documentario." });
    }
  }

  async delete ({ request, response }) {
    try {
      const { id } = request.params;

      await Documentario.query()
      .from('documentarios')
      .where('id', id)
      .update({
        deleted_at: moment().format("YYYY-MM-DD HH:mm:ss")
      });


      return response.status(200).json({ "mensage": "Documentario deletado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao deletar documentario." });
    }
  }
}

module.exports = DocumentarioController
