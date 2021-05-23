'use strict'

const User = use('App/Models/User')
const moment = require('moment');
class UserMController {
  async create ({ request, response }) {
    try {
      const data = request.only(["name_user", "email", "password", "dt_nascimento", "sexo", "phone", "acesso", "ativo"]);

      const user = await User.create(data);

      return response.status(200).json({ "message": 'Usuário cadastrado com sucesso.' });

    } catch(e) {
      return response.status(500).json(e);
    }
  }

  async list ({ request, response }) {
  }


  async listAll ({ request, response }) {
    try {
      const usuarios =  await User.from('users').whereNotNull('deleted_at')

      return response.status(200).json({ usuarios });
    } catch(e) {
      return response.status(500).json({"message": "Erro ao listar todos os usuário", e});
    }
  }


  async update ({ request, response }) {
    try {
      const { id } = request.params;
      const { name_user, email, password, dt_nascimento, sexo, phone, acesso, ativo } = request.body

      await User.query()
        .from('users')
        .where('id', id)
        .update({
          name_user,
          email,
          password,
          dt_nascimento,
          sexo,
          phone,
          acesso,
          ativo,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
        });

      return response.status(200).json({ "mensage": "Usuario atualizado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao atualizado usuario." });
    }
  }


  async delete ({  request, response }) {
    try {
      const { id } = request.params;

      await User.query()
        .from('users')
        .where('id', id)
        .update({ deleted_at: moment().format("YYYY-MM-DD HH:mm:ss") });

      return response.status(200).json({ "mensage": "Usuario deletado com sucesso." });

    } catch(e) {
      return response.status(500).json({ "mensage": "Erro ao deletar usuario." });
    }
  }
}

module.exports = UserMController
