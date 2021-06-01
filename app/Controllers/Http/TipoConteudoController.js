'use strict'

const TipoConteudo = use('App/Models/TipoConteudo');
const Database = use('Database');
const moment = require('moment');
class TipoConteudoController {
  async create ({ request, response }) {
    try {
      const tipoConteudo = request.only(["tipo"]);

      await TipoConteudo.create(tipoConteudo);

      return response.status(200).json({ "message": 'Tipo de conteudo cadastrada com sucesso.' });

    } catch(e) {
      return response.status(500).json({ "message": 'Erro ao cadastrar o tipo de conteudo', e });
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const tipoConteudo = await Database.from('tipo_conteudos').where('id', id)

      if (tipoConteudo == '') {
        return response.status(200).json({ "message": "Tipo de conteudo não foi encontrado" });
      }

      return response.status(200).json(tipoConteudo);
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar tipo de conteudo" });
    }
  }

  async listAll ({ response }) {
    try {
      const tipoConteudo =  await Database
        .from('tipo_conteudos')
        .where('deleted_at', null)
        .select('*')

      return response.status(200).json(tipoConteudo);
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar todos os tipo de conteudo" });
    }
  }

  async update ({ request, response }) {
    try {
      const { id } = request.params;
      const { tipo } = request.body

      await TipoConteudo.query()
        .from('tipo_conteudos')
        .where('id', id)
        .update({
          tipo,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
        });

      return response.status(200).json({ "mensage": "Tipo de conteudo atualizada com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizado tipo de conteudo." });
    }
  }

  async delete ({ request, response }) {
    try {
      const { id } = request.params;

      await TipoConteudo.query()
      .from('tipo_conteudos')
      .where('id', id)
      .update({
        deleted_at: moment().format("YYYY-MM-DD HH:mm:ss")
      });

      return response.status(200).json({ "mensage": "Tipo de conteudo deletado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao deletar tipo de conteudo." });
    }
  }
}


module.exports = TipoConteudoController
