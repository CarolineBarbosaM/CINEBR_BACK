'use strict'
const User = use('App/Models/User');
const chai = require('chai')
const expect = chai.expect

class AuthController {
  async authenticate ({ request, response, auth }) {
    try {
      const { email, password } = request.body;
      const user = await User.findBy({'email': email, 'ativo': 1, deleted_at: null});

      if(!user){
        return response.status(500).json({message:'Usuário não foi encontrado.'})
      }

      const token = await auth.attempt(email, password);

      if(!token) {
        return response.status(500).json({message:'Erro ao gerar token do usuário.'});
      }

      const profile = await User.findBy('id', user.id);
      if(profile && profile.profile == process.env.ADM){
        const permissao = {id: profile.profile, name: profile.name_user, permission: true}

        return response.status(200).json({permissao, token})
      }

      return response.status(200).json({token})

    } catch(e) {
      return response.status(500).json({ message: "Error ao autenticar usuário." });
    }
  }

  describe('Autenticação', () => {
    it('Autenticar Usuarios', (done) => {
        const resultado = authenticate(carolbarbosa@teste.com, 456123)
        expect(resultado).to.be.an('array')
        expect(resultado).to.be.equal(4)
        done()
    })
})
}

module.exports = AuthController
