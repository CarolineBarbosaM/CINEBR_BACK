'use strict'
const Ator = use('App/Models/Ator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ators
 */
class AtorController {
  // GET ators   
  async listAll ({ request, response, view }) {
    const atores = Ator.all();
    return atores;
  }

  // POST ators
  async create ({ request, response }) {
    const data = request.only([
      'nome',
      'dt_nacimento',
      'descricao',
      'participacao',
      'id_ator'
    ])

    const ator = await Ator.create({ ...data });
    return ator;
  }

  // GET ators/:id
  async list ({ params, request, response, view }) {
    const ator = await Ator.findOrFail(params.id);
    return ator;
  }
  
  // PUT or PATCH ators/:id
  async update ({ params, request, response }) {
    const ator = await Ator.findOrFail(params.id);
    const data = request.only([
        'nome',
        'dt_nacimento',
        'descricao',
        'participacao',
        'id_ator'
    ]);
    ator.merge(data);
    await ator.save();
    return ator
  }

  // DELETE ators/:id
  async delete ({ params, request, response }) {
    const ator = await Ator.findOrFail(params.id);

    if (ator) {
      await ator.delete();
      return response.status(200).send();
    } else {
      return response.status(404).send({ error: 'Not found' });
    }
  }
}

module.exports = AtorController
