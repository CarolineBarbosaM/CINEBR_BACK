'use strict'
const Serie = use('App/Models/Series');
const Database = use('Database');
const moment = require('moment');

class SeriesController {
  async create ({ request, response, auth }) {
    try {
      const serie = request.only(["titulo", "ano", "sinopse", "classificacao", "capa"]);

      await Serie.create(serie);

      return response.status(200).json({ "message": 'Serie cadastrada com sucesso.' });

    } catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar usuário'});
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const user = await Database.from('series').where('id', id)

      if (serie == '') {
        return response.status(200).json({ "message": "Series não encontrado" });
      }

      return response.status(200).json({ serie });
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar series" });
    }
  }


  async listAll ({ response }) {
    try {
      const series =  await Database
        .from('series')
        .where('deleted_at', null)
        .select('*')

      return response.status(200).json({ series });
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar todos os series" });
    }
  }


  async update ({ request, response }) {
    try {
      const { id } = request.params;
      const { titulo, ano,  sinopse, classificacao, capa, id_ator } = request.body

      await Serie.query()
        .from('series')
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

      return response.status(200).json({ "mensage": "Serie atualizada com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizado serie." });
    }
  }


  async delete ({ request, response }) {
    try {
      const { id } = request.params;

      const query = await Database.raw(`
        select s.id, s.titulo, s.ano, s.sinopse, s.classificacao, s.capa, s.id_ator, id_categoria
        from series as s
        inner join ators as a ON a.id = s.id_ator
        inner join categorias as c ON c.id = s.id_categoria
        where s.id = ${ id }`
      );


      return response.status(200).json({ "mensage": "Usuario deletado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao deletar usuario." });
    }
  }

}

module.exports = SeriesController
