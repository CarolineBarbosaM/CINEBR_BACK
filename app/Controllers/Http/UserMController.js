'use strict'

class UserMController {

  async create ({ request, response }) {
    try {
      const data = request.only(['name_user', 'email', 'password', 'dt_nascimento', 'sexo', 'phone', 'acesso', 'ativo'])
      const user = await User.create(data)

      return response.status(200).json({ user });

    } catch(error) {
      return response.status(500).json({ message: "Error ao cadastrar usuario" });
    }
  }

  async list ({ request, response }) {
  }


  async listAll ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async delete ({ params, request, response }) {
  }
}

module.exports = UserMController
