'use strict'
const Serie = use('App/Models/Serie');
const Database = use('Database');
const moment = require('moment');

class SeriesController {
  async create ({ request, response, auth }) {
    try {
      const serie = request.only(["titulo", "ano", "sinopse", "classificacao", "capa", "id_ator"]);

      await Serie.create(serie);

      return response.status(200).json({ "message": 'Serie cadastrada com sucesso.' });

    } catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar usuário'});
    }
  }

  async list ({ request, response }) {
    const { id } = request.params;

      const query = await Database.raw(`
        select s.id, s.titulo, s.ano, s.sinopse, s.classificacao, s.capa, s.id_ator, s.id_categoria, a.nome, c.nome
        from series as s
        inner join ators as a ON a.id = s.id_ator
        inner join categorias as c ON c.id = s.id_categoria
        where s.id = ${ id }`
      );

  }


  async listAll ({ params, request, response, view }) {
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


  async delete ({ params, request, response }) {
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
