'use strict'

const Categoria = use('App/Models/categoria');
const Database = use('Database');
const moment = require('moment');

class CategoriaController {
    async create ({request, response}) {
      try {
        const categoria = request.only(["tipo"]);

        await Categoria.create(categoria);

        return response.status(200).json({"message": "Categoria cadastrada."});

      } catch(e) {
        return response.status(500).json(e);
      }
    }

    async list ({request, response}) {
      try {
        const {id} = request.params;
        const categoria = await Database.from("categorias").where("id", id)

        if (categoria == '') {
          return response.status(200).json({"message": "Categoria não encontrada!"});
        }

        return response.status(200).json({categoria});
      } catch(e) {
        return response.status(500).json({"message": "Erro!"});
      }

    }

    async listAll ({response}) {
      try {
        const categorias =  await Database
          .from("categorias")
          .where("deleted_at", null)
          .select('*')

        return response.status(200).json({categorias});
       }
      catch(ex) {
        return response.status(500).json({"message": "Erro!"});
      }
    }

    async update ({request, response}) {
      try {
        const {id} = request.params;
        const {nome} = request.body

        await Categoria.query()
          .from("categorias")
          .where("id", id)
          .update({
            nome,
            updated_at: moment().format("YYYY-MM-DD")
          });

        return response.status(200).json({"mensage": "Categoria atualizada!"});
      }
      catch(ex) {
        return response.status(500).json({"mensage": "Erro!", ex});
      }
    }

    async delete ({request, response}) {
      try {
        const {id} = request.params;

        await Categoria.query()
          .from('categorias')
          .where('id', id)
          .update({deleted_at: moment().format("YYYY-MM-DD")});

        return response.status(200).json({"mensage": "Categoria deletada!"});

      }
      catch(ex) {
        return response.status(500).json({"mensage": "Erro!", ex});
      }
    }
  }

module.exports = CategoriaController
