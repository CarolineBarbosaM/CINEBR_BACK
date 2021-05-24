'use strict'
const TipoConteudo = use('App/Models/TipoConteudo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with entretenimentos
 */
class AtorController {
  // GET entretenimentos/listAll   
  async listAll ({ request, response, view }) {
    const tipo = TipoConteudo.all();
    return tipo;
  }

  // POST entretenimentos/create
  async create ({ request, response }) {
    const tipo = request.only([
      'id',
      'tipo'
    ])

    const tipo = await TipoConteudo.create({ ...tipo});
    return tipo;
  }

  // GET entretenimentos/list/:id
  async list ({ params, request, response, view }) {
    const tipo = await TipoConteudo.findOrFail(params.id);
    return tipo;
  }
  
  // PUT or PATCH entretenimentos/update/:id
  async update ({ params, request, response }) {
    const tipo  = await TipoConteudo.findOrFail(params.id);
    const tipo = request.only([
      'id',
      'tipo'
    ]);

    tipo.merge(tipo);
    await tipo.save();
    return tipo
  }

// DELETE entretenimentos/delete/:id
async delete ({ params, request, response }) {
  const tipo = await TipoConteudo.findOrFail(params.id);


    if (tipo) {
      await tipo.delete();
      return response.status(200).send();
    } else {
      return response.status(404).send({ error: 'Not found' });
    }
  }
}


module.exports = TipoConteudoController
