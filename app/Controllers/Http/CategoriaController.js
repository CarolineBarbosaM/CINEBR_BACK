'use strict'

const Categoria = use('App/Models/Categoria');


class CategoriaController {
    async create ({request, response}) {
      try {
        const categoria = request.only(["id", "nome"]);
  
        await Categoria.create(categoria);
  
        return response.status(200).json({"message": "Categoria cadastrada."});
  
      } catch(ex) {
        return response.status(500).json(e);
      }
    }
  
    async list ({request, response}) {
      try {
        const {id} = request.params;
        const categoria = await Database.from("categoria").where("id", id)
  
        if (categoria == '') {
          return response.status(200).json({"message": "Categoria não encontrada!"});
        }
  
        return response.status(200).json({categoria});
      } catch(ex) {
        return response.status(500).json({"message": "Erro!"});
      }
  
    }
  
    async listAll ({response}) {
      try {
        const categorias =  await Database
          .from("categoria")
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
  
        await User.query()
          .from("categoria")
          .where("id", id)
          .update({
            nome,
            updated_at: moment().format("YYYY-MM-DD")
          });
  
        return response.status(200).json({"mensage": "Categoria atualizada!"});
      } 
      catch(ex) {
        return response.status(500).json({"mensage": "Erro!"});
      }
    }
  
    async delete ({request, response}) {
      try {
        const {id} = request.params;
  
        await User.query()
          from('categoria')
          where('id', id)
          update({deleted_at: moment().format("YYYY-MM-DD")});
  
        return response.status(200).json({"mensage": "Categoria deletada!"});
  
      } 
      catch(ex) {
        return response.status(500).json({"mensage": "Erro!"});
      }
    }
  }

module.exports = CategoriaController
