'use strict'

const User = use('App/Models/User');
const Database = use('Database');
const moment = require('moment');
class UserMController {
  async create ({ request, response }) {
    try {
      const user = request.only(["name_user", "email", "password", "dt_nascimento", "sexo", "phone", "acesso", "ativo"]);

      await User.create(user);

      return response.status(200).json({ "message": 'Usuário cadastrado com sucesso.' });

    } catch(e) {
      return response.status(500).json(e);
    }
  }

  async list ({ request, response }) {
    try {
      const { id } = request.params;
      const user = await Database.from('users').where('id', id)

      if (user == '') {
        return response.status(200).json({"message": "Usuário não encontrado"});
      }

      return response.status(200).json({ user });
    } catch(e) {
      return response.status(500).json({"message": "Erro ao listar usuário", e});
    }

  }


  async listAll ({ response }) {
    try {
      const usuarios =  await Database
        .from('users')
        .where('deleted_at', null)
        .select('*')

      return response.status(200).json({ usuarios });
    } catch(e) {
      return response.status(500).json({"message": "Erro ao listar todos os usuários", e});
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
