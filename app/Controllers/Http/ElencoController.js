'use strict'
const Elenco= use('App/Models/Elenco')
const Database = use('Database');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with elencos
 */
class ElencoController {
  async create ({ request, response, auth }) {
    try {
      const elenco = request.only(["id_entreterimento","atores"])

      await elenco.create(elenco);

      return response.status(200).json({ "message": 'Elenco cadastrada com sucesso.' });

        } 
   
        catch(e) {
      return response.status(500).json({"message": 'Erro ao cadastrar elenco'}); 
    }

  }

  async list ({ request, response }) {
  try {
    const { id } = request.params;
    const user = await Database.from("elenco").where('id', id)

    if (elenco == ''){

      return response.status(200).json({"message": "message":"Elenco não foi encontrado" })
                      }
      return response.status(200).json({ elenco });
     } catch(e){

        return response.status(500).json({ "message": "Erro ao listar elenco" });
                }
                                    }
   
 

  async listAll ({ response }) {
    try { 
      const elenco = await Database
        .from('elenco')
        .where('deleted_at',null)
        .select('*')

        return response.status(200).json({ elenco });

       } 
 
        catch(e) {
            return response.status(500).json({ "message":"Erro ao listar todos os elencos"})

                }     
                            }     


  async update ({ request, response }) {
      try{
          const { id } = request.params;
          const { atores, id_entreterimento } = request.body

          await elenco.query()
          .from('elenco')
          .where('id', id)
          .update({
            
            id_entreterimento,
            atores,
            updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
            
                  })

            return response.status(200).json({ "message": "Elenco atualizado com sucesso." })

        } 
      
      catch (e){
        
        return response.status(500).json({ "mensage": "Erro ao atualizado filmes." });

              }
                                  }


  async delete ({ request, response }) {

        try {
            const { id }= request.params;

            await elenco.query()
            .from('elenco')
            .where('id', id)
            .update({
              deleted_at: moment().format("YYYY-MM-DD HH:mm:ss")
            })

            return response.status(200).json({ "mensage": "Elenco deletado com sucesso." });

            }

            catch(e){
              return response.status(500).json({ "mensage": "Erro ao deletar Elenco." });
            }


  }
}

module.exports = ElencoController
