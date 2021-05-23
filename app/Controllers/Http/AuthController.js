'use strict'

class AuthController {
  async authenticate ({ request, response, auth }) {
    try {
      const { email, password } = request.all()
      const token = await auth.attempt(email, password)

      return response.status(200).json({ token });

    } catch(e) {
      return response.status(500).json({ message: "Error ao autenticar usuario" });
    }
  }
}

module.exports = AuthController
