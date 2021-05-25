'use strict'
const Filme= use('App/Models/Filme')
const Database = use('Database');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with filmes
 */
class FilmeController {
  async create ({ request, response, auth }) {
    try {
      const filme = request.only(["titulo", "ano", "sinopse", "classificacao", "capa"]);

      await Filme.create(filme);

      return response.status(200).json({ "message": 'Filme cadastrada com sucesso.' });

    } catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar filme'});
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const user = await Database.from('filmes').where('id', id)

      if (filme == '') {
        return response.status(200).json({ "message": "Filmes não foi encontrado" });
      }

      return response.status(200).json({ serie });
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar filmes" });
    }
  }


  async listAll ({ response }) {
    try {
      const filmes =  await Database
        .from('filmes')
        .where('deleted_at', null)
        .select('*')

      return response.status(200).json({ filmes });
    } catch(e) {
      return response.status(500).json({ "message": "Erro ao listar todos os filmes" });
    }
  }


  async update ({ request, response }) {
    try {
      const { id } = request.params;
      const { titulo, ano,  sinopse, classificacao, capa, id_ator } = request.body

      await Serie.query()
        .from('filmes')
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

      return response.status(200).json({ "mensage": "Filmes atualizada com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizado filmes." });
    }
  }

  async delete ({ request, response }) {
    try {
      const { id } = request.params;

      await Filme.query()
      .from('filmes')
      .where('id', id)
      .update({
        deleted_at: moment().format("YYYY-MM-DD HH:mm:ss")
      });


      return response.status(200).json({ "mensage": "Filme deletado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao deletar filme." });
    }
  }
}

module.exports = FilmeController
