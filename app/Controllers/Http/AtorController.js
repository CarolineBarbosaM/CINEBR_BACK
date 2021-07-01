'use strict'
const Ator = use('App/Models/Ator')
const moment = require('moment');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ators
 */
class AtorController {
  // GET ators/listAll
  async listAll ({ request, response, view }) {
    try {
      const atores = Ator.all();
      return response.status(200).json(atores);
    } catch (error) {
      return response.status(500).json({"mensage": "Erro ao listar atores" });
    }
  }

  // POST ators/create
  async create ({ request, response }) {
    const data = request.only([
      'nome',
      'dt_nascimento',
      'descricao',
      'elenco'
    ])

    const atorExist = await Ator.findBy({'nome': data.nome, deleted_at: null});
    if(atorExist) {
      return response.status(500).json({ "mensage": "Ator já existe" });
    }

    if(!data){
      return response.status(500).json({"mensage": "Erro ao criar ator" });
    }

    const ator = await Ator.create({ ...data });
    return response.status(200).json({"mensage": "Ator criado com sucesso." });
  }

  // GET ators/list/:id
  async list ({ params, request, response, view }) {
    try {
      const ator = await Ator.findOrFail(params.id);
      return response.status(200).json(ator);
    }catch(err) {
      return response.status(500).json({"mensage": "Erro ao listar ator" });
    }
  }

  // PUT or PATCH ators/update/:id
  async update ({ params, request, response }) {
    /*
    const ator = await Ator.findOrFail(params.id);
    const data = request.only([
        'nome',
        'dt_nacimento',
        'descricao',
        'participacao'
    ]);
    ator.merge(data);
    await ator.save();
    return ator
    */
    try {
      const ator = await Ator.findOrFail(params.id);
      const { id } = request.params;
      const { nome, dt_nascimento, descricao, participacao } = request.body

      await Ator.query()
        .from('ators')
        .where('id', id)
        .update({
          nome,
          dt_nascimento,
          descricao,
          participacao,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
        });
      return response.status(200).json({ "mensage": "Ator atualizado com sucesso." });
    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizar ator" });
    }
  }

  // DELETE ators/delete/:id
  async delete ({ params, request, response }) {
    const ator = await Ator.findOrFail(params.id);

    if (ator) {
      await ator.delete();
      return response.status(200).send({ "success": "Deleted Successfuly"});
    } else {
      return response.status(404).send({ error: 'Not found' });
    }
  }
}

module.exports = AtorController
